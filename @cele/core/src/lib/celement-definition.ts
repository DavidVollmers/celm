import { CElement, CElementType } from './celement';

export type CElementStylesFunction<T extends CElement> = (
  this: T,
) => CSSStyleSheet;

export type CElementStyles<T extends CElement> =
  | CElementStylesFunction<T>
  | CSSStyleSheet;

export type CElementTemplateFunction<T extends CElement> = (this: T) => Node[];

export type CElementTemplate<T extends CElement> =
  | CElementTemplateFunction<T>
  | Node[];

export interface CElementDefinition<T extends CElement> {
  readonly name: string;
  readonly template?: CElementTemplate<T>;
  readonly styles?: CElementStyles<T>;
  readonly attributes?: string[];
  readonly shadow?: false | Partial<ShadowRootInit>;
}

export const mergeDefinition = <T extends CElement>(
  type: CElementType<T>,
  definition: Partial<CElementDefinition<T>>,
): void => {
  if (!type.definition) type.definition = definition;
  else {
    const attributesBefore = type.definition.attributes;
    type.definition = {
      ...type.definition,
      ...definition,
      attributes: [],
    };
    if (attributesBefore) {
      for (const attribute of attributesBefore) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        type.definition.attributes!.push(attribute);
      }
    }
    if (definition.attributes) {
      for (const attribute of definition.attributes) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        type.definition.attributes!.push(attribute);
      }
    }
  }
};
