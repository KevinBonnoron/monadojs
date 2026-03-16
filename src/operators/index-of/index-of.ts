import type { Collection } from '../../types';
import { isCollection, isMap, isPlainObject, keysOf, valuesOf } from '../../utils';

export function indexOf<E>(searchElement: E, fromIndex?: number): <S extends Collection<E> | Record<PropertyKey, E>>(source: S) => PropertyKey {
  return <S extends Collection<E> | Record<PropertyKey, E>>(source: S): PropertyKey =>
    isMap(source)
      ? (([...keysOf(source)][[...valuesOf(source)].indexOf(searchElement, fromIndex)] ?? -1) as PropertyKey)
      : isCollection<S>(source)
        ? [...source.values()].indexOf(searchElement, fromIndex)
        : isPlainObject(source)
          ? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            (([...keysOf(source)][[...valuesOf(source)].indexOf(searchElement as any, fromIndex)] ?? -1) as PropertyKey)
          : source === searchElement
            ? 0
            : -1;
}
