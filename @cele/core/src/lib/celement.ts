import { CElementDefinition } from './celement-definition';
import { EventType } from './event-type';

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
      const node =
        typeof definition.template === 'function'
          ? definition.template.call(this)
          : definition.template;
      if (definition.shadow === false) this.appendChild(node);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      else this.shadowRoot!.appendChild(node);
    }
  }
}
