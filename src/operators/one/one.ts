import { Filter } from '../../types';
import { isArray } from '../../utils';

export const one =
  <T>(predicate: Filter<T>) =>
  (source: T) =>
    isArray<T>(source) ? source.filter(predicate).length === 1 : predicate(source);
