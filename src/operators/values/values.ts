import { isArray, isMap, isPlainObject, isSet } from '../../utils';

function valuesImpl<V>(source: V[] | Set<V>): IterableIterator<V>;
function valuesImpl<K, V>(source: Map<K, V>): IterableIterator<V>;
function valuesImpl<K extends PropertyKey, V>(source: Record<K, V>): IterableIterator<V>;
function valuesImpl(source: unknown) {
  return isArray(source)
    ? [...source].values()
    : isSet(source)
    ? [...source].values()
    : isMap(source)
    ? source.values()
    : isPlainObject(source)
    ? [...Object.values(source)]
    : [].values();
}

export const values = () => valuesImpl;
