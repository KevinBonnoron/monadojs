import { Mapper } from '../../types';
import { isArray, isObject, isString } from '../../utils';
import { lower } from '../lower/lower';
import { upper } from '../upper/upper';

export const capitalize =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(capitalize()) : isString(values) ? `${upper()(values.charAt(0))}${lower()(values.slice(1))}` : isObject(values) ? Object.fromEntries(Object.entries(values).map(([key, value], index) => [key, capitalize()(value), index])) : null;
