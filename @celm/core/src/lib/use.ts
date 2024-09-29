import { CElement, CElementType } from './celement';
import { CelmOptions, defaultCelmOptions } from './celm-options';

export function use<T extends CElement>(
  element: CElementType<T>,
  options: CelmOptions = defaultCelmOptions,
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
