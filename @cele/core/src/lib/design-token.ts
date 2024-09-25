import { PropertyTarget, StyleElementPropertyTarget } from './property-target';

export class DesignToken {
  private static readonly _targets: PropertyTarget[] = [];
  private static readonly _tokens: {
    [varName: string]: DesignToken;
  } = {};

  private readonly _varName: string;
  private readonly _propertyName: string;

  private _value?: string;

  public get name(): string {
    return this._name;
  }

  public get varName(): string {
    return this._varName;
  }

  public get propertyName(): string {
    return this._propertyName;
  }

  public constructor(
    private readonly _name: string,
    private readonly _defaultValue: string,
    mapPrefix?: string,
  ) {
    this._propertyName = DesignToken.sanitizeName(_name);
    this._varName =
      '--' +
      (mapPrefix
        ? DesignToken.sanitizeName(mapPrefix + '-' + _name)
        : this._propertyName);
    const existing = DesignToken._tokens[this._varName];
    if (existing)
      throw new Error(
        `Design token name collision between "${existing._name}" and "${_name}"`,
      );
    DesignToken._tokens[this._varName] = this;
  }

  public setValue(value: string): void {
    this._value = value;
    for (const target of DesignToken._targets) {
      DesignToken.setToken(this, target);
    }
  }

  public static registerTarget(target: PropertyTarget): void {
    for (const token in DesignToken._tokens) {
      DesignToken.setToken(DesignToken._tokens[token], target);
    }
    DesignToken._targets.push(target);
  }

  public static registerAsStyleElement(element?: HTMLStyleElement): void {
    const target = new StyleElementPropertyTarget(element);
    DesignToken.registerTarget(target);
  }

  private static setToken(token: DesignToken, target: PropertyTarget): void {
    target.setProperty(token._varName, token._value ?? token._defaultValue);
  }

  private static sanitizeName(name: string): string {
    const sanitized = name
      .replace(/\s/g, '')
      .replace(/[^a-z0-9]/gi, '-')
      .replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`)
      .replace(/-{2,}/g, '-')
      .toLowerCase();
    return sanitized.startsWith('-') ? sanitized.substring(1) : sanitized;
  }
}
