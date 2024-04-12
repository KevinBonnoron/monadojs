/**
 * Type guard for `value === false`
 * @param value
 * @returns boolean
 */
export function isFalse(value: unknown): value is false {
  return value === false;
}
