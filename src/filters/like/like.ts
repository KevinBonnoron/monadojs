import { Filter } from '../../types';
import { isRegExp, isString } from '../../utils';

export const like = <S>(expected: RegExp | string): Filter<S> => (source: S) => {
  let regexp = expected;
  if (!isRegExp(regexp)) {
    regexp = new RegExp(expected);
  }

  return isString(source) ? regexp.test(source) : false
};
