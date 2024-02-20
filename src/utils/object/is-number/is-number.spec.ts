import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isNumber } from './is-number';

describe('isNumber', () => {
  it('should return true', () => {
    expect(isNumber(0)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber('a')).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isNumber(DEFAULT_DATE)).toBeFalsy();
    expect(isNumber(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isNumber(DEFAULT_REGEX)).toBeFalsy();
    expect(isNumber(EMPTY_ARRAY)).toBeFalsy();
    expect(isNumber(EMPTY_SET)).toBeFalsy();
    expect(isNumber(EMPTY_MAP)).toBeFalsy();
    expect(isNumber(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isNumber(anonymousArrowFn)).toBeFalsy();
    expect(isNumber(anonymousFn)).toBeFalsy();
    expect(isNumber(DEFAULT_MAYBE)).toBeFalsy();
    expect(isNumber(Nothing)).toBeFalsy();
  });
});
