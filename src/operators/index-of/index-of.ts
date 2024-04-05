import { isCollection, isMap, isPlainObject, keysOf, valuesOf } from '../../utils';

export const indexOf =
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (searchElement: any, fromIndex?: number) =>
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    <S>(source: S): {} =>
      isMap(source)
        ? [...keysOf(source)][[...valuesOf(source)].indexOf(searchElement, fromIndex)] ?? -1
        : isCollection<S>(source)
          ? [...source.values()].indexOf(searchElement, fromIndex)
          : isPlainObject(source)
            ? [...keysOf(source)][[...valuesOf(source)].indexOf(searchElement, fromIndex)] ?? -1
            : source === searchElement
              ? 0
              : -1;
