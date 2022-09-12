import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';

export const map =
  <T, O>(predicate: Mapper<T, O>) =>
  (values: T | T[]) =>
    isArray(values) ? values.map(predicate) : isObject(values) ? Object.entries(values).reduce((object, [key, value]) => ({ ...object, [key]: predicate(value, key as any) }), {} as O) : predicate(values);
