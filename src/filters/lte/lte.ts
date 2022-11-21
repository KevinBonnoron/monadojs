import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const lte =
  <T = number | string>(expected: T): Filter<T> =>
  (values: T) =>
    isArray<T>(values) ? values.every(lte(expected)) : isNil(values) ? false : values <= expected;
