import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const ceil =
  <T extends number>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(ceil()) : Math.ceil(values);
