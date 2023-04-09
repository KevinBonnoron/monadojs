import { isArray, isCollection, isEqual, isString } from '../../utils';

type Container<T> = Array<T> | Map<any, T> | Set<T> | string;

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
      : isString(source)
      ? source.includes(searchElement as string)
      : isEqual(source, searchElement);
