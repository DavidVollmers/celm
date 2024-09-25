export interface PropertyTarget {
  setProperty(name: string, value: string): void;

  removeProperty(name: string): void;
}
