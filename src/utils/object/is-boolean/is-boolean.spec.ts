import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isBoolean } from './is-boolean';

describe('isBoolean', () => {
  it('should return true', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean('a')).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isBoolean(DEFAULT_DATE)).toBeFalsy();
    expect(isBoolean(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isBoolean(DEFAULT_REGEX)).toBeFalsy();
    expect(isBoolean(EMPTY_ARRAY)).toBeFalsy();
    expect(isBoolean(EMPTY_SET)).toBeFalsy();
    expect(isBoolean(EMPTY_MAP)).toBeFalsy();
    expect(isBoolean(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isBoolean(anonymousArrowFn)).toBeFalsy();
    expect(isBoolean(anonymousFn)).toBeFalsy();
    expect(isBoolean(DEFAULT_MAYBE)).toBeFalsy();
    expect(isBoolean(Nothing)).toBeFalsy();
  });
});
