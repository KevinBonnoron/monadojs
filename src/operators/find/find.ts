import { Filter } from '../../types';
import { isArray } from '../../utils';

export const find =
  (predicate: Filter) =>
  <T>(values: T) =>
    isArray<T>(values) ? values.find(predicate) : predicate(values);
