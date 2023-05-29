/**
 * Type guard for
 * @example value === null
 * @param value
 * @returns boolean
 */
export const isNull = (value: unknown): value is null => value === null;
