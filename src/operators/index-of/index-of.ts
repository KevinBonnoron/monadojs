import type { Collection } from '../../types';
import { isCollection, isMap, isPlainObject, keysOf, valuesOf } from '../../utils';

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export function indexOf<E>(searchElement: E, fromIndex?: number): <S extends Collection<E> | Record<PropertyKey, E>>(source: S) => {} {
  return <S extends Collection<E> | Record<PropertyKey, E>>(source: S) =>
    isMap(source)
      ? [...keysOf(source)][[...valuesOf(source)].indexOf(searchElement, fromIndex)] ?? -1
      : isCollection<S>(source)
        ? [...source.values()].indexOf(searchElement, fromIndex)
        : isPlainObject(source)
          ? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            [...keysOf(source)][[...valuesOf(source)].indexOf(searchElement as any, fromIndex)] ?? -1
          : source === searchElement
            ? 0
            : -1;
}
