import { Filter } from '../../types';
import { isArray, isMap } from '../../utils';

export const filter =
  (predicate: Filter) =>
  <T>(source: T) =>
    isArray<T>(source) ? source.filter(predicate) : isMap(source) ? [...source.values()].filter(predicate) : [source].filter(predicate);
