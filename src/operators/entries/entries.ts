import { isArray, isMap, isObject } from '../../utils';

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export const entries =
  <T>() =>
  (value: T) =>
    isArray<T>(value)
      ? ([...value.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isMap(value)
      ? ([...value.entries()] as unknown as ReadonlyArray<Entry<T>>)
      : isObject<T>(value)
      ? (Object.entries(value) as unknown as ReadonlyArray<Entry<T>>)
      : [];
