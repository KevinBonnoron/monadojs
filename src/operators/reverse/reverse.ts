import { isArray } from '../../utils';

export const reverse =
  () =>
  <T>(values: T) =>
    isArray<T>(values) ? [...values].reverse() : values;
