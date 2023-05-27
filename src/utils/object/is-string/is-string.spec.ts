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
import { isString } from './is-string';

describe('isString', () => {
  it('should return true', () => {
    expect(isString('a')).toBeTruthy();
  });

  it('should return false', () => {
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(0)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isString(DEFAULT_DATE)).toBeFalsy();
    expect(isString(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isString(DEFAULT_REGEX)).toBeFalsy();
    expect(isString(EMPTY_ARRAY)).toBeFalsy();
    expect(isString(EMPTY_SET)).toBeFalsy();
    expect(isString(EMPTY_MAP)).toBeFalsy();
    expect(isString(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isString(anonymousArrowFn)).toBeFalsy();
    expect(isString(anonymousFn)).toBeFalsy();
    expect(isString(Just(1))).toBeFalsy();
    expect(isString(Nothing)).toBeFalsy();
  });
});
