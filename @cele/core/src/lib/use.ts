import { CElement, CElementType } from './celement';

export function use<T extends CElement>(
  element: CElementType<T>,
  ...args: any[]
): T {
  customElements.define(element.name, element);
  return new element(...args);
}
