import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lte =
  <T = number | string>(expected: T): Filter<T> =>
  (value: T) =>
    isArray<T>(value) ? value.every(lte(expected)) : isNil(value) ? false : value <= expected;
