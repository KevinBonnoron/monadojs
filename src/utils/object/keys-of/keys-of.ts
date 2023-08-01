import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isPlainObject } from '../is-plain-object/is-plain-object';
import { isSet } from '../is-set/is-set';

export function keysOf<V>(source: Array<V>): IterableIterator<number>;
export function keysOf<V>(source: Set<V>): IterableIterator<number>;
export function keysOf<K, V>(source: Map<K, V>): IterableIterator<K>;
export function keysOf<S>(source: S): IterableIterator<keyof S>;
export function keysOf(source: unknown) {
  return (
    isArray(source) ? [...source].keys() :
      isSet(source) ? [...source].keys() :
        isMap(source) ? source.keys() :
          isPlainObject(source) ? [...Object.keys(source)] :
            undefined
  );
}
