import { Mapper } from '../../types';
import { isArray, isObject, isString } from '../../utils';
import { entries } from '../entries/entries';
import { lower } from '../lower/lower';
import { upper } from '../upper/upper';

export const capitalize =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(capitalize()) : isString(values) ? `${upper()(values.charAt(0))}${lower()(values.slice(1))}` : isObject(values) ? Object.fromEntries(entries<T>()(values).map(([key, value], index) => [key, capitalize()(value), index])) : null;
