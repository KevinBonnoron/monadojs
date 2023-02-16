import { Filter } from '../../types';
import { isArray, isMap, isSet } from '../../utils';

export const filter =
  (predicate: Filter) =>
  <T>(source: T) =>
    (isArray(source)
      ? source.filter(predicate)
      : isMap(source)
      ? new Map([...source].filter(predicate))
      : isSet(source)
      ? new Set([...source].filter(predicate))
      : [source].filter(predicate)) as T;
