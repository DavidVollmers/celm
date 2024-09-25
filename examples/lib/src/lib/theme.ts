import { DesignToken, designTokenMap, DesignTokenMap } from '@cele/core';

export type ColorPalette = DesignTokenMap<
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
>;

export interface Theme {
  colors: {
    black: DesignToken;
    white: DesignToken;
    primary: ColorPalette;
  };
  borderRadius: DesignTokenMap<
    ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
  >;
  spacing: DesignTokenMap<
    [
      0,
      'px',
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
    ]
  >;
}

export const theme: Theme = {
  colors: {
    black: new DesignToken('colors.black', '#000'),
    white: new DesignToken('colors.white', '#fff'),
    primary: designTokenMap('colors.primary.', {
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
  borderRadius: designTokenMap('borderRadius.', {
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  }),
  spacing: designTokenMap('spacing.', {
    0: '0px',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  }),
};
