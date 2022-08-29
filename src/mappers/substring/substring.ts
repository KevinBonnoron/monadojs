import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const substring =
  <T extends string>(start: number, length?: number): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(substring(start, length)) : values.substring(start, length !== undefined ? start + length : undefined);
