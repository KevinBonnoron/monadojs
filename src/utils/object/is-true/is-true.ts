/**
 * Type guard for `value === true`
 * @param value
 * @returns boolean
 */
export const isTrue = (value: unknown): value is true => value === true;
