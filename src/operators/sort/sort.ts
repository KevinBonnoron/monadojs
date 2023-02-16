import { Sorter } from '../../types';
import { isArray, isMap, isSet } from '../../utils';

export const sort =
  (...predicates: Sorter[]) =>
  <T>(source: T) =>
    (isArray<T>(source)
      ? source.sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0))
      : isMap(source)
      ? new Map([...source].sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0)))
      : isSet(source)
      ? new Set([...source].sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a, b) : value), 0)))
      : source) as T;
