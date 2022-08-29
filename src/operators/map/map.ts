import { Mapper, Operator } from '../../types';
import { isArray, isObject } from '../../utils';

export const map =
  <T, O>(predicate: Mapper<T | T[] | [string, any], O>): Operator =>
  (values: T | T[]) =>
    isArray(values) ? values.map(predicate) : isObject(values) ? Object.entries(values).reduce((object, [key, value]) => ({ ...object, [key]: predicate([key, value]) }), {}) : predicate(values);
