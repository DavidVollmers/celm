import { DesignToken, designTokenMap, DesignTokenMap } from '@celm/core';

export type ColorPalette = DesignTokenMap<
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
>;

export type Text = DesignTokenMap<['fontSize', 'lineHeight', 'letterSpacing']>;

export interface Theme {
  colors: {
    black: DesignToken;
    white: DesignToken;
    primary: ColorPalette;
  };
  borderRadius: DesignTokenMap<
    ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
  >;
  text: {
    xs: Text;
    sm: Text;
    base: Text;
    lg: Text;
    xl: Text;
    '2xl': Text;
    '3xl': Text;
    '4xl': Text;
    '5xl': Text;
    '6xl': Text;
    '7xl': Text;
    '8xl': Text;
    '9xl': Text;
  };
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
  text: {
    xs: designTokenMap('text.xs.', {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: 'normal',
    }),
    sm: designTokenMap('text.sm.', {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: 'normal',
    }),
    base: designTokenMap('text.base.', {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: 'normal',
    }),
    lg: designTokenMap('text.lg.', {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      letterSpacing: 'normal',
    }),
    xl: designTokenMap('text.xl.', {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      letterSpacing: 'normal',
    }),
    '2xl': designTokenMap('text.2xl.', {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      letterSpacing: 'normal',
    }),
    '3xl': designTokenMap('text.3xl.', {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      letterSpacing: 'normal',
    }),
    '4xl': designTokenMap('text.4xl.', {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      letterSpacing: 'normal',
    }),
    '5xl': designTokenMap('text.5xl.', {
      fontSize: '3rem',
      lineHeight: '1',
      letterSpacing: 'normal',
    }),
    '6xl': designTokenMap('text.6xl.', {
      fontSize: '3.75rem',
      lineHeight: '1',
      letterSpacing: 'normal',
    }),
    '7xl': designTokenMap('text.7xl.', {
      fontSize: '4.5rem',
      lineHeight: '1',
      letterSpacing: 'normal',
    }),
    '8xl': designTokenMap('text.8xl.', {
      fontSize: '6rem',
      lineHeight: '1',
      letterSpacing: 'normal',
    }),
    '9xl': designTokenMap('text.9xl.', {
      fontSize: '8rem',
      lineHeight: '1',
      letterSpacing: 'normal',
    }),
  },
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
