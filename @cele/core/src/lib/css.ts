import { CElementStylesFunction } from './celement-definition';
import { CElement } from './celement';

export type CSSTemplateValue = string;

export const css = function <T extends CElement>(
  strings: TemplateStringsArray,
  ...values: CSSTemplateValue[]
): CElementStylesFunction<T> {
  return function (this: T): CSSStyleSheet {
    let content = '';
    for (const string of strings) {
      //TODO replace values
      content += string;
    }
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(content);
    return sheet;
  };
};
