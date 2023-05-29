/**
 * Type guard for `value instanceof Date`
 * @param value
 * @returns boolean
 */
export const isDate = (value: unknown): value is Date => value instanceof Date;
