/**
 * Type guard for `typeof value === 'string'`
 * @param value
 * @returns boolean
 */
export const isString = (value: any): value is string => typeof value === 'string';
