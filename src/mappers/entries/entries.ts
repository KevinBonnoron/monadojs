import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export const entries =
  <T>(): Mapper<T, ReadonlyArray<Entry<T>>> =>
  (values: T | T[]) =>
    isArray(values) ? (values.entries() as unknown as ReadonlyArray<Entry<T>>) : isObject(values) ? (Object.entries(values) as unknown as ReadonlyArray<Entry<T>>) : [];
