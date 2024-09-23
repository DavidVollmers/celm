import { CElement } from './celement';

export type CElementStylesFunction<T extends CElement> = (
  this: T,
) => CSSStyleSheet;

export type CElementStyles<T extends CElement> =
  | CElementStylesFunction<T>
  | CSSStyleSheet;

export type CElementTemplateFunction<T extends CElement> = (this: T) => Node;

export type CElementTemplate<T extends CElement> =
  | CElementTemplateFunction<T>
  | Node;

export interface CElementDefinition<T extends CElement> {
  readonly name: string;
  readonly template?: CElementTemplate<T>;
  readonly styles?: CElementStyles<T>;
  readonly shadow?: false | Partial<ShadowRootInit>;
}
