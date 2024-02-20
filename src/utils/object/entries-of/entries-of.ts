import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isPlainObject } from '../is-plain-object/is-plain-object';
import { isSet } from '../is-set/is-set';

export function entriesOf<V>(source: Array<V>): IterableIterator<[number, V]>;
export function entriesOf<V>(source: Set<V>): IterableIterator<[number, V]>;
export function entriesOf<K, V>(source: Map<K, V>): IterableIterator<[K, V]>;
export function entriesOf<S>(source: S): IterableIterator<[keyof S, S[keyof S]]>;
export function entriesOf(source: unknown) {
  return isArray(source) ? [...source].entries() : isSet(source) ? [...source].entries() : isMap(source) ? source.entries() : isPlainObject(source) ? [...Object.entries(source)] : undefined;
}
