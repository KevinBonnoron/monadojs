import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gt =
  <T = number | string>(expected: T): Filter<T> =>
  (value: T) =>
    isArray<T>(value) ? value.every(gt(expected)) : isNil(value) ? false : value > expected;
