import { isArray, isObject } from '../../utils';

type Key<T> = keyof T;

export function keys<T>(): (values: T) => ReadonlyArray<Key<T>>;
export function keys<T>(): (values: T[]) => ReadonlyArray<number>;
export function keys<T>() {
  return (values: T | T[]) => (isArray(values) ? [...values.keys()] : isObject(values) ? (Object.getOwnPropertyNames(values) as unknown as ReadonlyArray<Key<T>>) : null);
}
