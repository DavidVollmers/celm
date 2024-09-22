import { CElement, CElementType } from './celement';
import { CeleOptions, defaultCeleOptions } from './cele-options';

export function use<T extends CElement>(
  element: CElementType<T>,
  options: CeleOptions = defaultCeleOptions,
  ...args: any[]
): T {
  let name = element.definition?.name;
  if (!name) {
    throw new Error('Element name is not defined');
  }
  if (name[0] === '-') {
    name = options.prefix + name;
  }
  const existingElement = customElements.get(name);
  if (!existingElement) customElements.define(name, element);
  const instance = new element(...args);
  //TODO initialize instance
  return instance;
}
