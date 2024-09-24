import { DesignToken } from './design-token';

export interface DesignTokenMapInit {
  readonly [name: string]: string;
}

export type DesignTokenMap<T extends object> = {
  readonly [name in keyof T]: DesignToken;
};

export const designTokenMap = <T extends DesignTokenMapInit>(
  values: T,
): DesignTokenMap<T> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map: any = {};
  for (const name in values) {
    map[name] = new DesignToken(name, values[name]);
  }
  return map;
};
