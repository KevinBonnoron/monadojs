import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_REGEX,
  DEFAULT_SYMBOL,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../../tests/test.data';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isRegExp } from './is-regexp';

describe('isRegExp', () => {
  it('should return true', () => {
    expect(isRegExp(DEFAULT_REGEX)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isRegExp(null)).toBeFalsy();
    expect(isRegExp(undefined)).toBeFalsy();
    expect(isRegExp('a')).toBeFalsy();
    expect(isRegExp(0)).toBeFalsy();
    expect(isRegExp(false)).toBeFalsy();
    expect(isRegExp(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isRegExp(DEFAULT_DATE)).toBeFalsy();
    expect(isRegExp(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isRegExp(EMPTY_ARRAY)).toBeFalsy();
    expect(isRegExp(EMPTY_SET)).toBeFalsy();
    expect(isRegExp(EMPTY_MAP)).toBeFalsy();
    expect(isRegExp(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isRegExp(anonymousArrowFn)).toBeFalsy();
    expect(isRegExp(anonymousFn)).toBeFalsy();
    expect(isRegExp(Just(1))).toBeFalsy();
    expect(isRegExp(Nothing)).toBeFalsy();
  });
});
