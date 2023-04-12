/**
 * Type guard for `value instanceof Date`
 * @param value
 * @returns boolean
 */
export const isDate = (value: any): value is Date => value instanceof Date;
