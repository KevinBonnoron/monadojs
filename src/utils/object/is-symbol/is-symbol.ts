/**
 * Type guard for `typeof value === 'symbol'`
 * @param value
 * @returns boolean
 */
export const isSymbol = (value: any): value is symbol => typeof value === 'symbol';
