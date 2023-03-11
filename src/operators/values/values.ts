import { isArray, isCollection, isObject } from '../../utils';

export const values =
  () =>
  <S extends object>(source: S) =>
    isArray<S>(source) ? [...source.values()] : isCollection(source) ? [...source.values()] : isObject(source) ? Object.values(source) : source;
