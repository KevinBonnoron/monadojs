import { Collection, Reducer } from '../../types';
import { isArray, isCollection, isEmpty, isUndefined } from '../../utils';

const arrayReduceImpl = <T, U>(source: T[], predicate: Reducer, initialValue?: U) =>
  isUndefined(initialValue) ? source.slice().reduce(predicate) : source.slice().reduce(predicate, initialValue);
const collectionReduceImpl = <T, U>(source: Collection<T>, predicate: Reducer, initialValue?: U) =>
  isUndefined(initialValue) ? [...source].reduce(predicate) : [...source].reduce(predicate, initialValue);
const defaultReduceImpl = <T, U>(source: T, predicate: Reducer, initialValue?: U) =>
  isUndefined(initialValue) ? predicate(source, undefined as T, 1, [source]) : predicate(source, initialValue, 1, [source, initialValue]);

export function reduce(predicate: Reducer): <T, U>(value: T) => U;
export function reduce<U>(predicate: Reducer<U, U>, initialValue: U): <T>(value: T) => U;
export function reduce<T, U extends T>(predicate: Reducer<T, U>, initialValue?: U) {
  return (source: T) =>
    isEmpty(source)
      ? source
      : isArray(source)
      ? arrayReduceImpl(source, predicate, initialValue)
      : isCollection(source)
      ? collectionReduceImpl(source, predicate, initialValue)
      : defaultReduceImpl(source, predicate, initialValue);
}
