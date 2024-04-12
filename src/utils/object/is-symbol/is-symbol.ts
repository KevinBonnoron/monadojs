/**
 * Type guard for `typeof value === 'symbol'`
 * @param value
 * @returns boolean
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}
