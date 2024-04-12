/**
 * Type guard for `value === undefined`
 * @param value
 * @returns boolean
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}
