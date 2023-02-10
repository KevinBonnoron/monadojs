import { Filter } from '../../types';
import { isArray, isMap, isSet } from '../../utils';

export const filter =
  (predicate: Filter) =>
  <T>(source: T) =>
    isArray<T>(source)
      ? source.filter(predicate)
      : isMap(source)
      ? new Map([...source].filter(predicate) as any)
      : isSet(source)
      ? new Set([...source].filter(predicate) as any)
      : [source].filter(predicate);
