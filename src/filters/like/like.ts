import { Filter } from '../../types';
import { isArray, isString } from '../../utils';

export const like =
  <S>(expected: RegExp): Filter<S> =>
  (source: S) =>
    isArray<S>(source) ? source.every(like(expected)) : isString(source) ? expected.test(source) : false;
