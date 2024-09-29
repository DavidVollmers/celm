import { celm, CElement } from '@celm/core';
import { appTemplate as template } from './app.template';

@celm({
  name: 'example-app',
  template,
})
export class App extends CElement {}
