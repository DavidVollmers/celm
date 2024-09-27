import { CElementDefinition } from './celement-definition';

function getCElementDefinition<T extends CElement>(
  type: CElementType<T>,
): CElementDefinition<T> {
  if (type.definition) return type.definition;
  return getCElementDefinition(type.prototype);
}

export type CElementType<T extends CElement> = (new () => T) & {
  definition?: CElementDefinition<T>;
};

export abstract class CElement extends HTMLElement {
  private _isConnected = false;
  private _templateNodes?: Node[];

  public get template(): Node[] {
    if (!this._isConnected) throw new Error('Element not connected');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._templateNodes!;
  }

  public connectedCallback(): void {
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
  }
}
