import { Filter } from '../../types';
import { isArray } from '../../utils';

export const match =
  <T extends string>(expected: RegExp): Filter<T | T[]> =>
  (values: T | T[]) =>
    isArray(values) ? values.every(match(expected)) : expected.test(values);
