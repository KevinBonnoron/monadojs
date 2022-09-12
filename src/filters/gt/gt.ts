import { Filter } from '../../types';
import { isArray, isNil } from '../../utils';

export const gt =
  <T>(expected: T): Filter<T> =>
  (values: T) =>
    isArray<T>(values) ? values.every(gt(expected)) : isNil(values) ? false : values > expected;
