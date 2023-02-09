import { isArray, isMap, isObject } from '../../utils';

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export const entries =
  <T>() =>
  (source: T) =>
    isArray<T>(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isMap(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isObject<T>(source)
      ? (Object.entries(source) as unknown as ReadonlyArray<Entry<T>>)
      : [];
