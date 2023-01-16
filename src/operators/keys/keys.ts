import { isArray, isMap, isObject } from '../../utils';

type Key<T> = keyof T;

export const keys =
  <T>() =>
  (value: T) =>
    isArray<T>(value)
      ? ([...value.keys()] as unknown as ReadonlyArray<Key<T>>)
      : isMap(value)
      ? ([...value.keys()] as unknown as ReadonlyArray<Key<T>>)
      : isObject<T>(value)
      ? (Object.keys(value) as unknown as ReadonlyArray<Key<T>>)
      : [];
