//TODO find a better way then triple slash reference (import style)

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../@cele/jsx/src/jsx-runtime.d.ts" />

import { DesignToken } from '@cele/core';

export { Button } from './lib/button/button';

export { theme } from './lib/theme';

export type { Theme, ColorPalette } from './lib/theme';

export const useLib = () => {
  DesignToken.registerDeclaration(document.documentElement.style);
};
