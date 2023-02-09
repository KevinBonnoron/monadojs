import { Filter } from '../../types';
import { isArray, isString } from '../../utils';

export const like =
  <T>(expected: RegExp): Filter<T> =>
  (source: T) =>
    isArray<T>(source) ? source.every(like(expected)) : isString(source) ? expected.test(source) : false;
