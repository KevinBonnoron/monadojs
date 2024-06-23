import { isArray } from '../is-array/is-array';
import { isSet } from '../is-set/is-set';

/**
 * Convert value to Map
 *
 * @param keyFn
 * @returns
 */
export function toMap<K, V>(value: unknown, keyFn: (value: V, index: number) => K): Map<K, V> {
  return isArray<V>(value) ? new Map([...value.map((v, i) => [keyFn(v, i), v] as [K, V])]) : isSet<V>(value) ? new Map([...[...value].map((value, index) => [keyFn(value, index), value] as [K, V])]) : (value as Map<K, V>);
}
