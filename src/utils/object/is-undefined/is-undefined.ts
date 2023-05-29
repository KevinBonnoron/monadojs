/**
 * Type guard for `value === undefined`
 * @param value
 * @returns boolean
 */
export const isUndefined = (value: unknown): value is undefined => value === undefined;
