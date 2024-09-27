import { JsxFactory } from './lib/jsx-factory';
import { defaultCeleOptions } from '@cele/core';
import { JSX_FRAGMENT } from './lib/symbols';

export { JsxFactory };

export { useRef } from './lib/use-ref';

export type { CElementReference } from './lib/use-ref';

declare global {
  interface Window {
    cele: {
      jsx: typeof JsxFactory.prototype.jsx;
      JsxFragment: symbol;
    };
  }
}

const jsxFactory = new JsxFactory(defaultCeleOptions);

window.cele = window.cele || {};
window.cele.jsx = jsxFactory.jsx;
window.cele.JsxFragment = JSX_FRAGMENT;
