import './lib/intrinsic-elements';
import { JsxFactory } from './lib/jsx-factory';
import { defaultCeleOptions } from '@cele/core';

export { JsxFactory };

declare global {
  interface Window {
    cele: {
      jsx: typeof JsxFactory.prototype.jsx;
    };
  }
}

const jsxFactory = new JsxFactory(defaultCeleOptions);

window.cele = window.cele || {};
window.cele.jsx = jsxFactory.jsx;
