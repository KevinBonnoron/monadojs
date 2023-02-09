import { Filter } from '../../types';
import { isArray } from '../../utils';

export const find =
  (predicate: Filter) =>
  <T>(source: T) =>
    isArray<T>(source) ? source.find(predicate) : predicate(source);
