import { CElement, CElementType } from '../celement';
import { mergeDefinition } from '../celement-definition';

export function attr<T extends CElement>() {
  return (target: T, property: string) => {
    const type = target.constructor as CElementType<T>;
    mergeDefinition(type, {
      attributes: [property],
    });
  };
}
