import { Operator, Sorter } from '../../types';

export const sort =
  <T>(...predicates: Sorter<T>[]): Operator =>
  (values: T[] | T[][]) =>
    values.sort((a, b) => predicates.reduce((value, predicate) => (value === 0 ? predicate(a as T, b as T) : value), 0));
