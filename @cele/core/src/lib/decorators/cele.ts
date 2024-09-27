import { CElement, CElementType } from '../celement';
import { CElementDefinition, mergeDefinition } from '../celement-definition';

export function cele<T extends CElement>(
  nameOrDefinition: string | CElementDefinition<T>,
) {
  return (target: CElementType<T>) => {
    mergeDefinition(
      target,
      typeof nameOrDefinition === 'string'
        ? { name: nameOrDefinition }
        : nameOrDefinition,
    );
    return target;
  };
}
