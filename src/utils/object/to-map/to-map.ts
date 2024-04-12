import { isArray } from '../is-array/is-array';
import { isSet } from '../is-set/is-set';

/**
 * Convert value to Map
 *
 * @param keyFn
 * @returns
 */
export function toMap<K, V>(keyFn: (value: V, index: number) => K) {
  return <S extends V>(source: S): Map<K, S> => (isArray<S>(source) ? new Map([...source.map((value, index) => [keyFn(value, index), value] as [K, V])]) : isSet<S>(source) ? new Map([...[...source].map((value, index) => [keyFn(value, index), value] as [K, V])]) : source) as Map<K, S>;
}
