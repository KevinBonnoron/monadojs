/**
 * Type guard for `value instanceof Promise`
 * @param value
 * @returns
 */
export const isPromise = <T>(value: unknown): value is Promise<T> => value instanceof Promise;
