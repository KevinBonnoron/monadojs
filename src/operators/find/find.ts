import { Filter } from '../../types';
import { isArray } from '../../utils';

export const find =
  <T>(predicate: Filter<T>) =>
  (values: T | T[]) =>
    isArray(values) ? values.find(predicate) : predicate(values);
