export interface CElementDefinition {
  readonly name: string;
}

export type CElementType<T extends CElement> = (new (...args: any[]) => T) & {
  definition?: CElementDefinition;
};

export abstract class CElement extends HTMLElement {}
