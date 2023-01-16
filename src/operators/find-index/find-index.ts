import { Filter } from '../../types';
import { isArray } from '../../utils';

export const findIndex =
  <T>(predicate: Filter<T>) =>
  (value: T) =>
    isArray<T>(value) ? value.findIndex(predicate) : predicate(value) ? 0 : -1;
