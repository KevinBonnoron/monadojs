import { Filter } from '../../types';
import { isArray } from '../../utils';

export const findIndex =
  <T>(predicate: Filter<T>) =>
  (source: T) =>
    isArray<T>(source) ? source.findIndex(predicate) : predicate(source) ? 0 : -1;
