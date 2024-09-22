import { CElement } from './celement';

export type CElementTemplateFunction<T extends CElement> = (this: T) => Node;

export type CElementTemplate<T extends CElement> =
  | CElementTemplateFunction<T>
  | Node;

export interface CElementDefinition<T extends CElement> {
  readonly name: string;
  readonly template?: CElementTemplate<T>;
  readonly shadow?: false | Partial<ShadowRootInit>;
}
