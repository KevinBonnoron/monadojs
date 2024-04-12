/**
 * Type guard for `typeof value === 'string'`
 *
 * @param value
 * @returns boolean
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
