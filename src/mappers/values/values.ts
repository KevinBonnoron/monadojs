import { Mapper } from '../../types';
import { isArray, isObject } from '../../utils';

export const values =
  <T>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? [...values.values()] : isObject(values) ? Object.values(values) : null;
