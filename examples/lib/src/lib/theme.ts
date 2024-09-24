import { DesignTokenMap } from '@cele/core';

export type ColorPalette = DesignTokenMap<
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
>;

export interface Theme {
  colors: {
    primary: ColorPalette;
  };
}
