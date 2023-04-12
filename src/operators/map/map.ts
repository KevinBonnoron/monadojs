import { Mapper } from '../../types';
import { isArray, isMap, isPlainObject, isSet } from '../../utils';
import { entries } from '../entries/entries';

export function map<S, O>(
  predicate: Mapper<S, O>
): {
  (source: S[]): O[];
  (source: Set<S>): Set<O>;
  <S extends Map<K, V>, K, V>(source: Map<K, V>): Map<K, O>;
  <S extends Object>(source: S): O;
};
export function map(predicate: Mapper) {
  return (source: unknown) =>
    isArray(source)
      ? source.map(predicate)
      : isSet(source)
      ? new Set([...source].map(predicate))
      : isMap(source)
      ? new Map([...source].map(([key, value]) => [key, predicate(value)]))
      : isPlainObject(source)
      ? [...entries()(source)].reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {})
      : predicate(source);
}
