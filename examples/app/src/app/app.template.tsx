import { App } from './app';
import { Button, designTokens } from 'examples-lib';

export const appTemplate = function (this: App) {
  function changeDesignToken() {
    designTokens.colors.primary['100'].setValue('#00ff00');
  }

  return (
    <Button onClick={changeDesignToken}>
      Hello <b>World</b>!
    </Button>
  );
};
