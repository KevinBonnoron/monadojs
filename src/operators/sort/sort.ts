import { Sorter } from '../../types';
import { isArray } from '../../utils';

export const sort =
  (...predicates: Sorter[]) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a as T, b as T) : value), 0)) : values;
