/**
 * Type guard for `value instanceof Promise`
 * @param value
 * @returns
 */
export const isPromise = <T>(value: any): value is Promise<T> => value instanceof Promise;
