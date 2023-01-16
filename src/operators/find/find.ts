import { Filter } from '../../types';
import { isArray } from '../../utils';

export const find =
  (predicate: Filter) =>
  <T>(value: T) =>
    isArray<T>(value) ? value.find(predicate) : predicate(value);
