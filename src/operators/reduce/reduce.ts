import { Reducer } from '../../types';
import { isArray, isUndefined } from '../../utils';

export function reduce(predicate: Reducer): <T, U>(value: T) => U;
export function reduce<U>(predicate: Reducer<U, U>, initialValue: U): <T>(value: T) => U;
export function reduce<T, U extends T>(predicate: Reducer<T, U>, initialValue?: U) {
  return (value: T) =>
    isArray<T>(value)
      ? value.length === 0
        ? value
        : isUndefined(initialValue)
        ? value.slice().reduce(predicate)
        : value.slice().reduce(predicate, initialValue)
      : predicate(value, initialValue as T, 1, [value]);
}
