import { Filter } from '../../types';
import { isArray, isString } from '../../utils';

export const like =
  <T>(expected: RegExp): Filter<T> =>
  (value: T) =>
    isArray<T>(value) ? value.every(like(expected)) : isString(value) ? expected.test(value) : false;
