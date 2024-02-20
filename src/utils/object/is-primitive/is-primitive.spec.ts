import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isPrimitive } from './is-primitive';

describe('isPrimitive', () => {
  it('should return true', () => {
    expect(isPrimitive('a')).toBeTruthy();
    expect(isPrimitive(0)).toBeTruthy();
    expect(isPrimitive(true)).toBeTruthy();
    expect(isPrimitive(DEFAULT_SYMBOL)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPrimitive(null)).toBeFalsy();
    expect(isPrimitive(undefined)).toBeFalsy();
    expect(isPrimitive(DEFAULT_DATE)).toBeFalsy();
    expect(isPrimitive(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isPrimitive(DEFAULT_REGEX)).toBeFalsy();
    expect(isPrimitive(EMPTY_ARRAY)).toBeFalsy();
    expect(isPrimitive(EMPTY_SET)).toBeFalsy();
    expect(isPrimitive(EMPTY_MAP)).toBeFalsy();
    expect(isPrimitive(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isPrimitive(anonymousArrowFn)).toBeFalsy();
    expect(isPrimitive(anonymousFn)).toBeFalsy();
    expect(isPrimitive(DEFAULT_MAYBE)).toBeFalsy();
    expect(isPrimitive(Nothing)).toBeFalsy();
  });
});
