/**
 * Type guard for `value === false`
 * @param value
 * @returns boolean
 */
export const isFalse = (value: any): value is false => value === false;
