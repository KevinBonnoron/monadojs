/**
 * Type guard for `value === true`
 * @param value
 * @returns boolean
 */
export function isTrue(value: unknown): value is true {
  return value === true;
}
