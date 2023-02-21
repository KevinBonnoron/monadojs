import { Mapper, UnwrapValue } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

export function map<S, O>(predicate: Mapper<UnwrapValue<S>, O>): (source: S) => O[];
export function map<O, T = any>(predicate: Mapper<T, O>): <S>(source: S) => O[];
export function map(predicate: Mapper) {
  return (source: unknown) =>
    isArray(source)
      ? source.map(predicate)
      : isObject(source)
      ? entries<any>()(source).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {})
      : predicate(source);
}
