import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const keys =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? [...values.keys()] : Object.getOwnPropertyNames(values);
