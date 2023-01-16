import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gte =
  <T = number | string>(expected: T): Filter<T> =>
  (value: T) =>
    isArray<T>(value) ? value.every(gte(expected)) : isNil(value) ? false : value >= expected;
