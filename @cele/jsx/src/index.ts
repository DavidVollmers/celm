import { jsx } from './lib/jsx';
import './lib/intrinsic-elements';

declare global {
  interface Window {
    cele: {
      jsx: typeof jsx;
    };
  }
}

window.cele = window.cele || {};
window.cele.jsx = jsx;
