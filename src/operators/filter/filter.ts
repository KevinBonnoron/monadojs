import { Filter } from '../../types';
import { isArray } from '../../utils';

export const filter =
  (predicate: Filter) =>
  <T>(values: T) =>
    (isArray<T>(values) ? values.filter(predicate) : [values].filter(predicate)) as T;
