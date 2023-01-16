import { Filter } from '../../types';
import { isArray, isMap } from '../../utils';
import { values } from '../values/values';

export const filter =
  (predicate: Filter) =>
  <T>(value: T) =>
    isArray<T>(value) ? (value.filter(predicate) as T) : isMap(value) ? values()(value).filter(predicate) : ([value].filter(predicate) as T);
