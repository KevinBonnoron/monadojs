import { isArray, isCollection, isEqual, isPrimitive } from '../../utils';

type Container<T> = Array<T> | Map<unknown, T> | Set<T> | string;

/**
 * Return true if `source` contains `searchElement` or is equal to it
 * @param searchElement
 * @returns boolean
 */
export const includes =
  <T>(searchElement: T) => (source: Container<T>) => (
    isArray<T>(source) ? source.some((value) => isEqual(value, searchElement)) :
      isCollection(source) ? [...source.values()].some((value) => isEqual(value, searchElement)) :
        isPrimitive(source) ? source.includes(searchElement as string) :
          isEqual(source, searchElement)
  );
