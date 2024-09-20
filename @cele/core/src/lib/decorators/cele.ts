import { CElement, CElementType } from '../celement';

export interface CElementDefinitionOptions {
  readonly name: string;
}

export function cele<T extends CElement>(
  nameOrOptions: string | CElementDefinitionOptions,
) {
  return (target: CElementType<T>) => {
    return target;
  };
}
