import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isNil } from './is-nil';

describe('isNil', () => {
  it('should return true', () => {
    expect(isNil(null)).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNil('a')).toBeFalsy();
    expect(isNil(0)).toBeFalsy();
    expect(isNil(true)).toBeFalsy();
    expect(isNil(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isNil(DEFAULT_DATE)).toBeFalsy();
    expect(isNil(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isNil(DEFAULT_REGEX)).toBeFalsy();
    expect(isNil(EMPTY_ARRAY)).toBeFalsy();
    expect(isNil(EMPTY_SET)).toBeFalsy();
    expect(isNil(EMPTY_MAP)).toBeFalsy();
    expect(isNil(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isNil(anonymousArrowFn)).toBeFalsy();
    expect(isNil(anonymousFn)).toBeFalsy();
    expect(isNil(DEFAULT_MAYBE)).toBeFalsy();
    expect(isNil(Nothing)).toBeFalsy();
  });
});
