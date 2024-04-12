import type { Collection, Reducer } from '../../types';
import { isCollection, isEmpty, isUndefined } from '../../utils';

const collectionReduceImpl = <T, U>(source: Collection<T>, predicate: Reducer, initialValue?: U) => (isUndefined(initialValue) ? [...source].reduce(predicate) : [...source].reduce(predicate, initialValue));
const defaultReduceImpl = <S, U>(source: S, predicate: Reducer, initialValue?: U) => (isUndefined(initialValue) ? predicate(source, undefined as S, 1, [source]) : predicate(source, initialValue, 1, [source, initialValue]));

export function reduce<K, V, U>(predicate: Reducer<U, [K, V]>, initialValue?: U): (source: Map<K, V>) => U;
export function reduce<S, U>(predicate: Reducer<U, S>, initialValue?: U): (source: Collection<S>) => U;
export function reduce(predicate: Reducer, initialValue?: unknown) {
  return (source: unknown) => (isEmpty(source) ? initialValue : isCollection(source) ? collectionReduceImpl(source, predicate, initialValue) : defaultReduceImpl(source, predicate, initialValue));
}
