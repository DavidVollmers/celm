## @celm/core

This is the core package of the Celm library. It contains the core functionality to create simple and lightweight custom
elements.

### Documentation

Coming soon...

### Overview

At the core is the `CElement` base class for creating custom elements which reacts to changes in properties and
attributes. It is meant to be used in conjunction with the `@celm` and `@attr` decorators, to define the name, style,
DOM and attributes of the custom element.

You can also use the [@celm/jsx](../jsx) package on top to use JSX to build your custom element's DOM.

### Example

```ts
import { CElement, attr, celm, css } from '@celm/core';

@celm({
  name: 'my-element',
  template: [document.createElement('h1')],
  style: css`
    h1 {
      color: blue;
    }
  `,
})
class MyElement extends CElement {
  @attr()
  public name = 'World';

  protected override connectedCallback() {
    super.connectedCallback();
    this.template[0].textContent = `Hello, ${this.name}!`;
  }
}
```

To use your custom element, you first need to call the `use` function to register it with the browser:

```ts
import { use } from '@celm/core';

use(MyElement);
```

Then you can use it in your HTML:

```html
<my-element name="Celm"></my-element>
```

Or you can use it in your code like this:

```ts
const myElement = new MyElement();
myElement.name = 'Celm';

document.body.appendChild(myElement);
```
