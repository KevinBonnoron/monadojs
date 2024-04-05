import { Collection } from '../../types/collection.type';
import { contains } from '../../utils/object/contains/contains';

/**
 * Return true if `source` contains `searchElement` or is equal to it
 * @param searchElement
 * @returns boolean
 */
export const includes =
  <T>(searchElement: T) =>
  (source: Collection<T> | string): boolean =>
    contains(source, searchElement);
