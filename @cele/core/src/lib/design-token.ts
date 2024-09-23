export class DesignToken {
  private static readonly _declarations: CSSStyleDeclaration[] = [];
  private static readonly _tokens: {
    [varName: string]: DesignToken;
  } = {};

  private readonly _varName: string;

  private _value?: string;

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
    for (const declaration of DesignToken._declarations) {
      DesignToken.declareToken(this, declaration);
    }
  }

  public static registerDeclaration(declaration: CSSStyleDeclaration): void {
    for (const token in DesignToken._tokens) {
      DesignToken.declareToken(DesignToken._tokens[token], declaration);
    }
    this._declarations.push(declaration);
  }

  private static declareToken(
    token: DesignToken,
    declaration: CSSStyleDeclaration,
  ): void {
    declaration.setProperty(
      token._varName,
      token._value ?? token._defaultValue,
    );
  }
}
