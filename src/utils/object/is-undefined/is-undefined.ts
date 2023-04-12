/**
 * Type guard for `value === undefined`
 * @param value
 * @returns boolean
 */
export const isUndefined = (value: any): value is undefined => value === undefined;
