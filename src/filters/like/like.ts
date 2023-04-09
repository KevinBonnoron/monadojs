import { Filter } from '../../types';
import { isString } from '../../utils';

export const like =
  <S>(expected: RegExp): Filter<S> =>
  (source: S) =>
    isString(source) ? expected.test(source) : false;
