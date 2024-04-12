import type { AnyFunction } from '../../../types';

/**
 * Type guard for `typeof value === 'function'`
 * @param value
 * @returns boolean
 */
export function isFunction<T>(value: unknown): value is AnyFunction<T> {
  return typeof value === 'function';
}
