import { Operator, Reducer } from '../../types';
import { isArray, isUndefined } from '../../utils';

export const reduce =
  <T>(predicate: Reducer<T>, initialValue?: T): Operator =>
  (values: T | T[]) =>
    isArray(values) ? (isUndefined(initialValue) ? values.slice().reduce(predicate) : values.slice().reduce(predicate, initialValue as T)) : predicate(values, initialValue as T, 1, [values]);
