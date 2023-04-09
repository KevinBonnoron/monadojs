import { Mapper } from '../../types';
import { isArray, isMap, isPlainObject, isSet } from '../../utils';
import { entries } from '../entries/entries';

export function map<T, S extends Array<T>, O>(predicate: Mapper<T, O>): (source: S) => O[];
export function map<T, S extends Set<T>, O>(predicate: Mapper<T, O>): (source: S) => Set<O>;
export function map<T, K, S extends Map<K, T>, O>(predicate: Mapper<[K, T], [K, O]>): (source: S) => Map<K, O>;
export function map<T = any>(predicate: Mapper<T, any>): <S, O>(source: S) => O[];
export function map(predicate: Mapper) {
  return (source: unknown) =>
    isArray(source)
      ? source.map(predicate)
      : isSet(source)
      ? new Set([...source].map(predicate))
      : isMap(source)
      ? new Map([...source].map(predicate))
      : isPlainObject(source)
      ? [...entries()(source)].reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {})
      : predicate(source);
}
