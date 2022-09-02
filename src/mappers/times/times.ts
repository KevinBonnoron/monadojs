import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const times =
  <T extends number>(value: number): Mapper<T> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(times(value)) : values * value;
