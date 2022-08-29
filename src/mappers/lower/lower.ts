import { Mapper } from '../../types';
import { isArray, isObject, isString } from '../../utils';

export const lower =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(lower()) : isString(values) ? values.toLowerCase() : isObject(values) ? Object.fromEntries(Object.entries(values).map(([key, value], index) => [key, lower()(value), index])) : null;
