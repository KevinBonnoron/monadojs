import { isArray, isMap, isObject, isSet } from '../../utils';

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export const entries =
  <T>() =>
  (source: T) =>
    isArray<T>(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isMap(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isSet(source)
      ? ([...source].map((value, index) => [index, value]) as unknown as ReadonlyArray<Entry<T>>)
      : isObject<T>(source)
      ? (Object.entries(source) as unknown as ReadonlyArray<Entry<T>>)
      : [];
