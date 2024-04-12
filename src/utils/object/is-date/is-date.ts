/**
 * Type guard for `value instanceof Date`
 * @param value
 * @returns boolean
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}
