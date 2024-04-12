import type { Collection, Operator } from '../../types';
import { contains } from '../../utils/object/contains/contains';

type Container<T> = Collection<T> | string;

/**
 * Return true if `source` contains `searchElement` or is equal to it
 * @param searchElement
 * @returns boolean
 */
export function includes<T>(searchElement: T): Operator<Container<T>, boolean> {
  return (source: Container<T>): boolean => contains(source, searchElement);
}
