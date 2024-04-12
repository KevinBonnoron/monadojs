/**
 * Type guard for `value === null`
 *
 * @param value
 * @returns boolean
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
