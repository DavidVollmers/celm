import { CElementStylesFunction } from './celement-definition';
import { CElement } from './celement';
import { DesignToken } from './design-token';

export type CSSTemplateValue = string | number | DesignToken;

export const css = function <T extends CElement>(
  strings: TemplateStringsArray,
  ...values: CSSTemplateValue[]
): CElementStylesFunction<T> {
  return function (this: T): CSSStyleSheet {
    let content = '';
    for (let i = 0; i < strings.length; i++) {
      content += strings[i];
      if (i < values.length) {
        const value = values[i];
        if (typeof value === 'string' || typeof value === 'number')
          content += value.toString();
        else content += `var(${value.varName})`;
      }
    }
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(content);
    return sheet;
  };
};
