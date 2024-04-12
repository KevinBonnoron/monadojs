/**
 * Type guard for `typeof value === 'number'`
 *
 * @param value
 * @returns boolean
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
