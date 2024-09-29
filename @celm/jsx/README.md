## @celm/jsx

This package provides the JSX factory to be used with the [@celm/core](../core/README.md) package.

### Documentation

Coming soon...

### Overview

To use the JSX factory, you need to configure it in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxFactory": "celm.jsx",
    "jsxFragmentFactory": "celm.JsxFragment"
  }
}
```

Also make sure to import the JSX factory in the entry file of your project:

```ts
import '@celm/jsx';
```

### Example

```tsx
import { CElement, attr, celm, css } from '@celm/core';

@celm({
  name: 'my-element',
  template: function (this: MyElement) {
    return <h1>Hello, {this.name}!</h1>;
  },
  style: css`
    h1 {
      color: blue;
    }
  `,
})
class MyElement extends CElement {
  @attr()
  public name = 'World';
}
```
