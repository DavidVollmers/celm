import { CElement, CElementDefinition, CElementType } from '../celement';

export function cele<T extends CElement>(
  nameOrDefinition: string | CElementDefinition,
) {
  return (target: CElementType<T>) => {
    target.definition =
      typeof nameOrDefinition === 'string'
        ? { name: nameOrDefinition }
        : nameOrDefinition;
    return target;
  };
}
