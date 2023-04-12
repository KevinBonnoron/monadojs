/**
 * Type guard for `typeof value === 'boolean'`
 * @param value
 * @returns boolean
 */
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';
