import { isSymbol } from '../is-symbol/is-symbol';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const toString = (value: unknown): string => (isSymbol(value) ? 'Symbol' : `${value}`);
