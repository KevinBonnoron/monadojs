import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const sub =
  <T extends number>(value: number = 1): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(sub(value)) : values - value;
