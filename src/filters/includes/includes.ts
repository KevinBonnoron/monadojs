import { isArray, isCollection, isEqual } from '../../utils';

type Container<T> = Array<T> | Map<any, T> | Set<T>;

/**
 * Return true if `source` contains `searchElement` or is equal to it
 * @param searchElement
 * @returns boolean
 */
export const includes =
  <T>(searchElement: T) =>
  (source: Container<T>) =>
    isArray<T>(source)
      ? source.includes(searchElement)
      : isCollection(source)
      ? [...source.values()].includes(searchElement)
      : isEqual(source, searchElement);
