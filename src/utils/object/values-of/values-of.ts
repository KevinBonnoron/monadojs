import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isPlainObject } from '../is-plain-object/is-plain-object';
import { isSet } from '../is-set/is-set';

/**
 * Return the values of the passed Collection
 * @param source
 */
export function valuesOf<V>(source: Array<V>): IterableIterator<V>;
export function valuesOf<V>(source: Set<V>): IterableIterator<V>;
export function valuesOf<K, V>(source: Map<K, V>): IterableIterator<V>;
export function valuesOf<S>(source: S): IterableIterator<S[keyof S]>;
export function valuesOf(source: unknown) {
  return isArray(source) ? [...source].values() : isSet(source) ? [...source].values() : isMap(source) ? source.values() : isPlainObject(source) ? [...Object.values(source)] : undefined;
}
