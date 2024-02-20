export const toRegExp = (value: unknown) => new RegExp(value as string | RegExp);
