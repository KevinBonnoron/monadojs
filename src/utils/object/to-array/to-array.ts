import { isArray } from '../is-array/is-array';
import { isCollection } from '../is-collection/is-collection';
import { isNil } from '../is-nil/is-nil';

/**
 * Convert value to array
 *
 * @param value
 * @returns
 */
export function toArray<T>(value: unknown): T[] {
  return (isNil(value) ? [] : isArray<T>(value) ? value : isCollection<T>(value) ? [...value] : [value]) as T[];
}
