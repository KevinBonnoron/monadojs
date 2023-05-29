/**
 * Type guard for `typeof value === 'symbol'`
 * @param value
 * @returns boolean
 */
export const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';
