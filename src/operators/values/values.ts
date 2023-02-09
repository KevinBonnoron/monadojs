import { isArray, isCollection, isObject } from '../../utils';

export const values =
  () =>
  <T extends object>(source: T) =>
    isArray<T>(source) ? [...source.values()] : isCollection(source) ? [...source.values()] : isObject<T>(source) ? Object.values(source) : source;
