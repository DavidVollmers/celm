import { DesignToken } from './design-token';

export const designTokenMap = <
  T extends {
    readonly [name: string]: string;
  },
>(
  values: T,
): {
  readonly [name in keyof T]: DesignToken;
} => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map: any = {};
  for (const name in values) {
    map[name] = new DesignToken(name, values[name]);
  }
  return map;
};
