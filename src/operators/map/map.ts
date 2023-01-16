import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

export const map =
  <O = any>(predicate: Mapper) =>
  <T>(value: T): O =>
    isArray<T>(value)
      ? value.map<O>(predicate)
      : isObject<T>(value)
      ? entries<T>()(value).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value as T, key as any) }), {} as O)
      : predicate(value);
