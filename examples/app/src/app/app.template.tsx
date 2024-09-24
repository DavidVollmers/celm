import { App } from './app';
import { Button, theme } from 'examples-lib';

export const appTemplate = function (this: App) {
  function changeDesignToken() {
    theme.colors.primary['500'].setValue('#00ff00');
  }

  return (
    <Button onClick={changeDesignToken}>
      Hello <b>World</b>!
    </Button>
  );
};
