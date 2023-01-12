import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';
import { entries } from '../entries/entries';

export const map =
  <O = any>(predicate: Mapper) =>
  <T>(values: T): O =>
    isArray<T>(values) ? values.map<O>(predicate) : isObject<T>(values) ? entries<T>()(values).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value as T, key as any) }), {} as O) : predicate(values);
