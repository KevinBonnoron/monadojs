import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

export const map =
  <O = any>(predicate: Mapper) =>
  <T>(source: T): O =>
    isArray<T>(source)
      ? source.map<O>(predicate)
      : isObject<T>(source)
      ? entries<T>()(source).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value as T, key as any) }), {} as O)
      : predicate(source);
