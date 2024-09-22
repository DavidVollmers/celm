import { cele, CElement } from '@cele/core';
import { appTemplate as template } from './app.template';

@cele({
  name: 'app-root',
  template,
})
export class App extends CElement {}
