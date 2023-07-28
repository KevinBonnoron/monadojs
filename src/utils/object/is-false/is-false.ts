/**
 * Type guard for `value === false`
 * @param value
 * @returns boolean
 */
export const isFalse = (value: unknown): value is false => value === false;
