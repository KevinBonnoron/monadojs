import { isArray, isMap, isPlainObject, isSet } from '../../utils';

function entriesImpl<V>(source: V[] | Set<V>): IterableIterator<[number, V]>;
function entriesImpl<K, V>(source: Map<K, V>): IterableIterator<[K, V]>;
function entriesImpl<K extends PropertyKey, V>(source: Record<K, V>): IterableIterator<[K, V]>;
function entriesImpl(source: unknown) {
  return isArray(source)
    ? [...source].entries()
    : isSet(source)
    ? [...source].entries()
    : isMap(source)
    ? source.entries()
    : isPlainObject(source)
    ? [...Object.entries(source)]
    : [].entries();
}

export const entries = () => entriesImpl;
