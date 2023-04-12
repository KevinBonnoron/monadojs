import { Collection } from '../../../types';
import { isArray } from '../is-array/is-array';
import { isMap } from '../is-map/is-map';
import { isSet } from '../is-set/is-set';

export const isCollection = <V, K = any>(value: any): value is Collection<V, K> => isArray(value) || isMap<K, V>(value) || isSet<V>(value);
