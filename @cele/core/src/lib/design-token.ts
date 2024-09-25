import { PropertyTarget } from './property-target';

export class DesignToken {
  private static readonly _targets: PropertyTarget[] = [];
  private static readonly _tokens: {
    [varName: string]: DesignToken;
  } = {};

  private readonly _varName: string;

  private _value?: string;

  public get name(): string {
    return this._name;
  }

  public get varName(): string {
    return this._varName;
  }

  public constructor(
    private readonly _name: string,
    private readonly _defaultValue: string,
  ) {
    const varName = _name
      .replace(/\s/g, '')
      .replace(/[^a-z0-9]/gi, '-')
      .replace(/-{2,}/g, '-')
      .toLowerCase();
    if (varName.startsWith('-')) this._varName = '-' + varName;
    else this._varName = '--' + varName;
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

  //TODO allow registering via style element
  public static registerTarget(target: PropertyTarget): void {
    for (const token in DesignToken._tokens) {
      DesignToken.setToken(DesignToken._tokens[token], target);
    }
    DesignToken._targets.push(target);
  }

  private static setToken(token: DesignToken, target: PropertyTarget): void {
    target.setProperty(token._varName, token._value ?? token._defaultValue);
  }
}
