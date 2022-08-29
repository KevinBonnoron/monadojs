import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const round =
  <T extends number>(decimalCount: number = 2): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(round(decimalCount)) : Math.floor(values * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
