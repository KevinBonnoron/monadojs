/**
 * Type guard for `typeof value === 'number'`
 * @param value
 * @returns boolean
 */
export const isNumber = (value: any): value is number => typeof value === 'number';
