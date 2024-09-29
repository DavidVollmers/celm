import { JsxFactory } from './lib/jsx-factory';
import { defaultCelmOptions } from '@celm/core';
import { JSX_FRAGMENT } from './lib/symbols';

export { JsxFactory };

export { useRef } from './lib/use-ref';

export type { CElementReference } from './lib/use-ref';

declare global {
  interface Window {
    celm: {
      jsx: typeof JsxFactory.prototype.jsx;
      JsxFragment: symbol;
    };
  }
}

const jsxFactory = new JsxFactory(defaultCelmOptions);

window.celm = window.celm || {};
window.celm.jsx = jsxFactory.jsx;
window.celm.JsxFragment = JSX_FRAGMENT;
