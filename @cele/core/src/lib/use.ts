import { CElement, CElementType } from './celement';
import { CeleOptions, defaultCeleOptions } from './cele-options';

export function use<T extends CElement>(
  element: CElementType<T>,
  options: CeleOptions = defaultCeleOptions,
) {
  if (!element.definition) throw new Error('Missing element definition');
  let name = element.definition.name;
  if (!name) {
    throw new Error('Element name is not defined');
  }
  if (name[0] === '-') {
    name = options.prefix + name;
  }
  const existingElement = customElements.get(name);
  if (!existingElement) customElements.define(name, element);
  else if (existingElement !== element) {
    throw new Error(`Element ${name} already defined`);
  }
}
