import { Operator } from '../../types';
import { isArray } from '../../utils';

export const reverse =
  <T>(): Operator<T> =>
  (values: T | T[]) =>
    isArray(values) ? [...values].reverse() : values;
