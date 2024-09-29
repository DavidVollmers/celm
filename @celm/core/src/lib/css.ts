import { DesignToken } from './design-token';
import { DesignTokenMap } from './design-token-map';

export type CSSTemplateValue =
  | string
  | number
  | DesignToken
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | DesignTokenMap<any>;

//TODO allow using "this" inside css templates (return CSSStyleSheetFunction or CSSStyleSheet)
export const css = function (
  strings: TemplateStringsArray,
  ...values: CSSTemplateValue[]
): CSSStyleSheet {
  let content = '';
  for (let i = 0; i < strings.length; i++) {
    content += strings[i];
    if (i < values.length) {
      const value = values[i];
      if (typeof value === 'string' || typeof value === 'number')
        content += value.toString();
      else if (value instanceof DesignToken) content += `var(${value.varName})`;
      else {
        for (const property in value) {
          const token = value[property];
          content += `${token.propertyName}: var(${token.varName});`;
        }
      }
    }
  }
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(content);
  return sheet;
};
