import { cele, CElement, DesignToken } from '@cele/core';

@cele({
  name: 'example-lib',
  shadow: false,
  template: document.createElement('style'),
})
export class Lib extends CElement {
  public override connectedCallback() {
    super.connectedCallback();
    DesignToken.registerAsStyleElement(this.template as HTMLStyleElement);
  }
}
