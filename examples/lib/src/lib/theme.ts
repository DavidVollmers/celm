import { designTokenMap, DesignTokenMap } from '@cele/core';

export type ColorPalette = DesignTokenMap<
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
>;

export interface Theme {
  colors: {
    primary: ColorPalette;
  };
}

export const theme: Theme = {
  colors: {
    primary: designTokenMap({
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    }),
  },
};
