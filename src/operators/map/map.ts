import { Collection, Mapper } from '../../types';
import { isArray, isMap, isPlainObject, isSet } from '../../utils';
import { entries } from '../entries/entries';

type ToCollectionType<C extends Collection, V> = (
  C extends Array<unknown> ? V[] :
  C extends Set<unknown> ? Set<V> :
  C extends Map<infer K, unknown> ? Map<K, V> :
  never
)

// TODO find a way to infer I parameter
export function map<M extends Mapper<I>, I = any>(predicate: M): <S extends Collection<I>>(source: S) => ToCollectionType<S, ReturnType<M>>;
export function map(predicate: Mapper) {
  return (source: unknown) => isArray(source)
    ? source.map(predicate)
    : isSet(source)
      ? new Set([...source].map(predicate))
      : isMap(source)
        ? new Map([...source].map(([key, value]) => [key, predicate(value)]))
        : isPlainObject(source)
          ? [...entries()(source)].reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {})
          : predicate(source);
}
