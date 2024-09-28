import { cele, CElement } from '@cele/core';
import { appTemplate as template } from './app.template';

@cele({
  name: 'example-app',
  template,
})
export class App extends CElement {}
