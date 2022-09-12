import { Mapper } from '../../types';
import { isArray, isObject, isString } from '../../utils';
import { entries } from '../entries/entries';

export const upper =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(upper()) : isString(values) ? values.toUpperCase() : isObject(values) ? Object.fromEntries(entries<T>()(values).map(([key, value], index) => [key, upper()(value), index])) : null;
