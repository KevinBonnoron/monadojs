import type { Collection } from '../../../types';
import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isSet } from '../is-set/is-set';

export function isCollection<V, K = unknown>(value: unknown): value is Collection<V, K> {
  return isArray(value) || isMap<K, V>(value) || isSet<V>(value);
}
