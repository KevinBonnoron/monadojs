import { isSymbol } from '../is-symbol/is-symbol';

export const toString = (value: unknown) => (isSymbol(value) ? 'Symbol' : `${value}`);