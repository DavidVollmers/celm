import { CElement, CElementType } from './celement';

export function use<T extends CElement>(
  element: CElementType<T>,
  ...args: any[]
): T {
  let name = element.definition?.name;
  if (!name) {
    throw new Error('Element name is not defined');
  }
  if (name[0] === '-') {
    //TODO prefix element name
    name = name.slice(1);
  }
  customElements.define(name, element);
  return new element(...args);
}
