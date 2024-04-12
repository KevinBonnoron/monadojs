import type { Collection, Mapper, ObjectMapperType, ToCollectionType } from '../../types';
import { createMapperFn, isArray, isMap, isPlainObject, isSet } from '../../utils';
import { entries } from '../entries/entries';

export function map<M extends Mapper>(predicate: M): <S extends Collection>(source: S) => M extends Mapper<unknown> ? ToCollectionType<S, ReturnType<M>> : never;
export function map<P extends PropertyKey>(predicate: P): <S>(source: S) => S extends Collection<Record<P, infer V>> ? ToCollectionType<S, V> : never;
export function map<E extends object>(predicate: ObjectMapperType<E>): <S extends Collection<E>>(source: S) => ToCollectionType<S, E>;
export function map<E>(predicate: Mapper | PropertyKey | ObjectMapperType<E>) {
  const predicateFn = createMapperFn(predicate);

  return (source: E) =>
    isArray(source)
      ? source.map(predicateFn)
      : isSet(source)
        ? new Set([...source].map(predicateFn))
        : isMap(source)
          ? new Map([...source].map(([key, value]) => [key, predicateFn(value)]))
          : isPlainObject(source)
            ? // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
              [...entries()(source)].reduce((object, [key, value]) => ({ ...object, [key]: predicateFn(value, key) }), {})
            : predicateFn(source);
}
