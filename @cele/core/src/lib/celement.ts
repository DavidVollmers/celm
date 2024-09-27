import { CElementDefinition } from './celement-definition';
import { disconnectElementEvent, elementPropertyChangedEvent } from './symbols';

function getCElementDefinition<T extends CElement>(
  type: CElementType<T>,
): Partial<CElementDefinition<T>> {
  if (type.definition) return type.definition;
  return getCElementDefinition(type.prototype);
}

export type CElementType<T extends CElement> = (new () => T) & {
  definition?: Partial<CElementDefinition<T>>;
};

export abstract class CElement extends HTMLElement {
  private _isConnected = false;
  private _templateNodes?: Node[];

  public get template(): Node[] {
    if (!this._isConnected) throw new Error('Element not connected');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._templateNodes!;
  }

  protected connectedCallback(): void {
    if (this._isConnected) throw new Error('Element already connected');
    this._isConnected = true;
    const definition = getCElementDefinition(
      this.constructor as CElementType<this>,
    );
    if (definition.shadow !== false)
      this.attachShadow({
        mode: 'open',
        ...definition.shadow,
      });
    if (definition.template) {
      this._templateNodes =
        typeof definition.template === 'function'
          ? definition.template.call(this)
          : definition.template;
      for (const node of this._templateNodes) {
        if (definition.shadow === false) this.appendChild(node);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        else this.shadowRoot!.appendChild(node);
      }
    }
    if (definition.styles) {
      if (definition.shadow === false)
        throw new Error('Styles not supported on elements without shadow DOM');
      const sheet =
        typeof definition.styles === 'function'
          ? definition.styles.call(this)
          : definition.styles;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.shadowRoot!.adoptedStyleSheets = [sheet];
    }
    if (definition.attributes) {
      for (const attribute of definition.attributes) {
        this.observeProperty(attribute);
      }
    }
  }

  protected disconnectedCallback(): void {
    this.emit(disconnectElementEvent);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected updatedCallback(): void {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected emit(event: string, detail?: any): void {
    this.dispatchEvent(
      new CustomEvent(event, {
        detail,
        cancelable: false,
      }),
    );
  }

  private observeProperty(property: string): void {
    const descriptor = Object.getOwnPropertyDescriptor(this, property);
    let currentValue = descriptor?.get ? descriptor.get() : descriptor?.value;
    Object.defineProperty(this, property, {
      get() {
        return currentValue;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value: any) {
        if (currentValue === value) return;
        const oldValue = currentValue;
        currentValue = value;
        this.emit(elementPropertyChangedEvent, {
          property,
          oldValue,
          newValue: value,
        });
        this.update();
      },
    });
  }

  private update(): void {
    const definition = getCElementDefinition(
      this.constructor as CElementType<this>,
    );
    if (typeof definition.template === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      for (const oldNode of this._templateNodes!) {
        this.removeChild(oldNode);
      }
      this._templateNodes = definition.template.call(this);
    }
    if (typeof definition.styles === 'function') {
      const sheet = definition.styles.call(this);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.shadowRoot!.adoptedStyleSheets = [sheet];
    }
    this.updatedCallback();
  }
}
