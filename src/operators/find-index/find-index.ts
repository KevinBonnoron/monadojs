import { Filter } from '../../types';
import { isArray } from '../../utils';

export const findIndex =
  <T>(predicate: Filter<T>) =>
  (values: T) =>
    isArray<T>(values) ? values.findIndex(predicate) : predicate(values) ? 0 : -1;
