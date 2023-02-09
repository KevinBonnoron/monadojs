import { Sorter } from '../../types';
import { isArray } from '../../utils';

export const sort =
  (...predicates: Sorter[]) =>
  <T>(source: T) =>
    isArray<T>(source)
      ? source.sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a as T, b as T) : value), 0))
      : source;
