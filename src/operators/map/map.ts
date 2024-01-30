import { Collection, Mapper, ObjectMapperType } from '../../types';
import { isArray, isMap, isPlainObject, isSet } from '../../utils';
import { createMapperFn } from '../../utils/map/map.utils';
import { entries } from '../entries/entries';

type ToCollectionType<C extends Collection, V> = (
  C extends Array<unknown> ? V[] :
  C extends Set<unknown> ? Set<V> :
  C extends Map<infer K, unknown> ? Map<K, V> :
  never
);

export function map<M extends Mapper>(predicate: M): <S extends Collection>(source: S) => M extends Mapper<unknown> ? ToCollectionType<S, ReturnType<M>> : never;
export function map<P extends PropertyKey>(predicate: P): <S>(source: S) => S extends Collection<Record<P, infer V>> ? ToCollectionType<S, V> : never;
export function map<E>(predicate: ObjectMapperType<E>): <S extends Collection<E>>(source: S) => ToCollectionType<S, E>;
export function map<E>(predicate: any) {
  const predicateFn = createMapperFn(predicate);

  return (source: E) => isArray(source)
    ? source.map(predicateFn)
    : isSet(source)
      ? new Set([...source].map(predicateFn))
      : isMap(source)
        ? new Map([...source].map(([key, value]) => [key, predicateFn(value)]))
        : isPlainObject(source)
          ? [...entries()(source)].reduce((object, [key, value]) => ({ ...object, [key]: predicateFn(value, key as any) }), {})
          : predicateFn(source);
}
