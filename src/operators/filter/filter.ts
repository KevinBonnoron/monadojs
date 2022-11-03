import { Filter } from '../../types';
import { isArray } from '../../utils';

export const filter =
  <T>(predicate: Filter<T>) =>
  (values: T | T[]) =>
    isArray<T>(values) ? values.filter(predicate) : [values].filter(predicate);
