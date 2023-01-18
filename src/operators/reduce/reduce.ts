import { Reducer } from '../../types';
import { isArray, isEmpty, isUndefined } from '../../utils';

const arrayReduceImpl = <T, U>(value: T[], predicate: Reducer, initialValue?: U) =>
  isUndefined(initialValue) ? value.slice().reduce(predicate) : value.slice().reduce(predicate, initialValue);
export function reduce(predicate: Reducer): <T, U>(value: T) => U;
export function reduce<U>(predicate: Reducer<U, U>, initialValue: U): <T>(value: T) => U;
export function reduce<T, U extends T>(predicate: Reducer<T, U>, initialValue?: U) {
  return (value: T) =>
    isArray<T>(value)
      ? isEmpty<T>(value)
        ? value
        : arrayReduceImpl(value, predicate, initialValue)
      : isUndefined(initialValue)
      ? predicate(value, undefined as T, 1, [value])
      : predicate(value, initialValue as T, 1, [value, initialValue]);
}
