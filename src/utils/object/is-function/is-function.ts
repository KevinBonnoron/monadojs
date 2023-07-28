import { AnyFunction } from '../../../types';

/**
 * Type guard for `typeof value === 'function'`
 * @param value
 * @returns boolean
 */
export const isFunction = <T>(value: unknown): value is AnyFunction<T> => typeof value === 'function';
