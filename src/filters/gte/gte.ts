import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gte =
  <T = number | string>(expected: T): Filter<T> =>
  (values: T) =>
    isArray<T>(values) ? values.every(gte(expected)) : isNil(values) ? false : values >= expected;
