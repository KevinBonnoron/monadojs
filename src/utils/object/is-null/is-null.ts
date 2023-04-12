/**
 * Type guard for
 * @example value === null
 * @param value
 * @returns boolean
 */
export const isNull = (value: any): value is null => value === null;
