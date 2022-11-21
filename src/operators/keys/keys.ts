import { isArray, isObject } from '../../utils';

type Key<T> = keyof T;

export function keys(): <T>(values: T) => ReadonlyArray<Key<T>>;
export function keys(): <T>(values: T) => ReadonlyArray<number>;
export function keys() {
  return <T>(values: T) => (isArray<T>(values) ? ([...values.keys()] as ReadonlyArray<number>) : isObject<T>(values) ? (Object.getOwnPropertyNames(values) as unknown as ReadonlyArray<Key<T>>) : null);
}
