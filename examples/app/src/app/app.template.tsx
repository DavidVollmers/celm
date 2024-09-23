import { App } from './app';
import { Button, designTokens } from 'examples-lib';

export const appTemplate = function (this: App) {
  function changeDesignToken() {
    designTokens.colors.primary['100'].setValue('#ff0000');
  }

  return (
    <Button onClick={changeDesignToken}>
      Hello <b>World</b>!
    </Button>
  );
};
