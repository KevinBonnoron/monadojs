import type { Filter } from '../../types';
import { isRegExp } from '../../utils/object/is-regexp/is-regexp';
import { isString } from '../../utils/object/is-string/is-string';

export function like<S>(expected: RegExp | string): Filter<S> {
  return (source: S) => {
    let regexp = expected;
    if (!isRegExp(regexp)) {
      regexp = new RegExp(expected);
    }

    return isString(source) ? regexp.test(source) : false;
  };
}
