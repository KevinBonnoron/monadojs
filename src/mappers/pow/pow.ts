import { Mapper } from '../../types';
import { isArray } from '../../utils';

export const pow =
  <T extends number>(power: number): Mapper<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.map(pow(power)) : Math.pow(values, power);
