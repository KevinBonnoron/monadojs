/**
 * Convert a value to RegExp
 *
 * @param value
 * @returns
 */
export function toRegExp(value: unknown): RegExp {
  return value instanceof RegExp ? value : new RegExp(value as string);
}
