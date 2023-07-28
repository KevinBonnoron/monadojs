import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_MAYBE,
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
import { Nothing } from '../../maybe/maybe.utils';
import { isArray } from './is-array';

describe('isArray', () => {
  it('should return true', () => {
    expect(isArray(EMPTY_ARRAY)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray(0)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
    expect(isArray(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isArray(DEFAULT_DATE)).toBeFalsy();
    expect(isArray(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isArray(DEFAULT_REGEX)).toBeFalsy();
    expect(isArray(EMPTY_SET)).toBeFalsy();
    expect(isArray(EMPTY_MAP)).toBeFalsy();
    expect(isArray(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isArray(anonymousArrowFn)).toBeFalsy();
    expect(isArray(anonymousFn)).toBeFalsy();
    expect(isArray(DEFAULT_MAYBE)).toBeFalsy();
    expect(isArray(Nothing)).toBeFalsy();
  });
});
