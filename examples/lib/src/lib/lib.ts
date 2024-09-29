import { celm, CElement, DesignToken } from '@celm/core';

@celm({
  name: 'example-lib',
  shadow: false,
  template: [document.createElement('style')],
})
export class Lib extends CElement {
  public override connectedCallback() {
    super.connectedCallback();
    DesignToken.registerAsStyleElement(this.template[0] as HTMLStyleElement);
  }
}
