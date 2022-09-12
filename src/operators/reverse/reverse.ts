import { isArray } from '../../utils';

export const reverse =
  <T>() =>
  (values: T | T[]) =>
    isArray(values) ? [...values].reverse() : values;
