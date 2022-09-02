import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const add =
  <T extends number>(value: number = 1): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(add(value)) : values + value;
