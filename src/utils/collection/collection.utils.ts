import { Collection } from '../../types/collection.type';
import { isArray } from '../object/is-array/is-array';
import { isEqual } from '../object/is-equal/is-equal';
import { isMap } from '../object/is-map/is-map';
import { isSet } from '../object/is-set/is-set';

export const isFirst = <T>(value: T, values: T[]) => isEqual(value, values[0]);
export const isLast = <T>(value: T, values: T[]) => isEqual(value, values[values.length - 1]);

export function ɵcopyCollection<T>(collection: T[], values: Iterable<T>): T[];
export function ɵcopyCollection<T>(collection: Set<T>, values: Iterable<T>): Set<T>;
export function ɵcopyCollection<K, V>(collection: Map<K, V>, values: Iterable<[K, V]>): Map<K, V>;
export function ɵcopyCollection<T>(collection: Collection<T>, values: Collection<T>): Collection<T>;
export function ɵcopyCollection<T>(collection: Collection<T>, values: any): Collection<T> {
  return (
    isArray(collection) ? [...values] :
      isSet(collection) ? new Set(values) :
        isMap<unknown, T>(collection) ? new Map(values) :
          collection
  );
}
