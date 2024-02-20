import { isSymbol } from '../is-symbol/is-symbol';

export const toNumber = (value: unknown) => (isSymbol(value) ? NaN : parseInt(value as string));
