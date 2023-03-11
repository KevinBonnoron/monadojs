import { isArray, isMap, isObject, isSet } from '../../utils';

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export const entries =
  <S>() =>
  (source: S) =>
    isArray<S>(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<S>>)
      : isMap(source)
      ? ([...source.entries()] as unknown as ReadonlyArray<Entry<S>>)
      : isSet(source)
      ? ([...source].map((value, index) => [index, value]) as unknown as ReadonlyArray<Entry<S>>)
      : isObject<S>(source)
      ? (Object.entries(source) as unknown as ReadonlyArray<Entry<S>>)
      : [];
