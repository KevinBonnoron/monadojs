import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const floor =
  <T extends number>(): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(floor()) : Math.floor(values);
