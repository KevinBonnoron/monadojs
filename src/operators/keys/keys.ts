import { isArray, isMap, isPlainObject, isSet } from '../../utils';

function keysImpl<V>(source: V[] | Set<V>): IterableIterator<number>;
function keysImpl<K, V>(source: Map<K, V>): IterableIterator<K>;
function keysImpl<K extends PropertyKey, V>(source: Record<K, V>): IterableIterator<K>;
function keysImpl(source: unknown) {
  return isArray(source)
    ? [...source].keys()
    : isSet(source)
    ? [...source].keys()
    : isMap(source)
    ? source.keys()
    : isPlainObject(source)
    ? [...Object.keys(source)]
    : [].keys();
}

export const keys = () => keysImpl;
