import { AccumulatedReducer, Reducer } from '../../types';
import { isArray, isUndefined } from '../../utils';

export function reduce<T, U>(predicate: Reducer<T, U>): (values: T) => U;
export function reduce<T, U>(predicate: AccumulatedReducer<T, U>, initialValue: U): (values: T) => U;
export function reduce<T, U extends T>(predicate: Reducer<T, U>, initialValue?: U) {
  return (values: T | T[]) => (isArray(values) ? (values.length === 0 ? values : isUndefined(initialValue) ? values.slice().reduce(predicate) : values.slice().reduce(predicate, initialValue)) : predicate(values, initialValue as T, 1, [values]));
}
