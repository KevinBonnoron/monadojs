import { isArray } from '../is-array/is-array';
import { isNil } from '../is-nil/is-nil';

/**
 * Type guard for `!!value && typeof value === 'object' && !Array.isArray(value)`
 *
 * @param value
 * @returns boolean
 */
export function isObject<T>(value: unknown): value is T & object {
  return !isNil(value) && typeof value === 'object' && !isArray(value);
}
