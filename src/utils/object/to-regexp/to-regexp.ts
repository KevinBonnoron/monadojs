export const toRegExp = (value: unknown): RegExp => new RegExp(value as string | RegExp);
