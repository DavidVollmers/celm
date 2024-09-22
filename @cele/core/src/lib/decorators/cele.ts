import { CElement, CElementType } from '../celement';
import { CElementDefinition } from '../celement-definition';

export function cele<T extends CElement>(
  nameOrDefinition: string | CElementDefinition<T>,
) {
  return (target: CElementType<T>) => {
    target.definition =
      typeof nameOrDefinition === 'string'
        ? { name: nameOrDefinition }
        : nameOrDefinition;
    return target;
  };
}
