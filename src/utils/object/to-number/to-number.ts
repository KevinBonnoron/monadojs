import { isSymbol } from '../is-symbol/is-symbol';

/**
 * Convert a value to number
 * @param value
 * @returns
 */
export function toNumber(value: unknown): number {
  return isSymbol(value) ? Number.NaN : Number.parseInt(value as string);
}
