import { isArray, isMap, isObject } from '../../utils';

type Key<T> = keyof T;

export const keys =
  <T>() =>
  (source: T) =>
    isArray<T>(source)
      ? ([...source.keys()] as unknown as ReadonlyArray<Key<T>>)
      : isMap(source)
      ? ([...source.keys()] as unknown as ReadonlyArray<Key<T>>)
      : isObject<T>(source)
      ? (Object.keys(source) as unknown as ReadonlyArray<Key<T>>)
      : [];
