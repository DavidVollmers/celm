import { DesignToken } from './design-token';

export interface DesignTokenMapInit {
  readonly [name: string | number | symbol]: string;
}

export type DesignTokenMap<T extends (string | number | symbol)[]> = {
  readonly [name in T[number]]: DesignToken;
};

export const designTokenMap = <T extends DesignTokenMapInit>(
  prefix: string,
  values: T,
): DesignTokenMap<[keyof T]> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map: any = {};
  for (const name in values) {
    map[name] = new DesignToken(prefix + name, values[name]);
  }
  return map;
};
