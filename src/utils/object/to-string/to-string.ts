import { isSymbol } from '../is-symbol/is-symbol';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export function toString(value: unknown): string {
  return isSymbol(value) ? 'Symbol' : `${value}`;
}
