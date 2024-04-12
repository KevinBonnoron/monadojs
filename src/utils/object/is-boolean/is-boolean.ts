/**
 * Type guard for `typeof value === 'boolean'`
 * @param value
 * @returns boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
