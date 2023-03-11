import { isArray, isMap, isPlainObject } from '../../utils';

type Key<T> = keyof T;

export const keys =
  <S>() =>
  (source: S) =>
    isArray<S>(source)
      ? ([...source.keys()] as unknown as ReadonlyArray<Key<S>>)
      : isMap(source)
      ? ([...source.keys()] as unknown as ReadonlyArray<Key<S>>)
      : isPlainObject<S>(source)
      ? (Object.keys(source) as unknown as ReadonlyArray<Key<S>>)
      : [];
