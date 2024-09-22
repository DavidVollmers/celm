import { CElementDefinition } from './celement-definition';

export type CElementType<T extends CElement> = (new (...args: any[]) => T) & {
  definition?: CElementDefinition<T>;
};

export abstract class CElement extends HTMLElement {
  private _initialized = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected onInit(): void {}

  public initialize(definition: CElementDefinition<this>): void {
    if (this._initialized) throw new Error('Element already initialized');
    this._initialized = true;
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
    this.onInit();
  }
}
