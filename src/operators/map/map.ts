import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

export function map<T, S extends Array<T>, O>(predicate: Mapper<T, O>): (source: S) => O[];
export function map<T = any>(predicate: Mapper<T, any>): <S, O>(source: S) => O[];
export function map(predicate: Mapper) {
  return (source: unknown) =>
    isArray(source)
      ? source.map(predicate)
      : isObject(source)
      ? entries<any>()(source).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {})
      : predicate(source);
}
