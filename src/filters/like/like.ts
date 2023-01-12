import { Filter } from '../../types';
import { isArray, isString } from '../../utils';

export const like =
  <T>(expected: RegExp): Filter<T> =>
  (values: T) =>
    isArray<T>(values) ? values.every(like(expected)) : isString(values) ? expected.test(values) : false;
