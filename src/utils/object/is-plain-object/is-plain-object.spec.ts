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
import { isPlainObject } from './is-plain-object';

describe('isPlainObject', () => {
  it('should return true', () => {
    expect(isPlainObject(EMPTY_PLAIN_OBJECT)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
    expect(isPlainObject('a')).toBeFalsy();
    expect(isPlainObject(0)).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isPlainObject(DEFAULT_DATE)).toBeFalsy();
    expect(isPlainObject(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isPlainObject(DEFAULT_REGEX)).toBeFalsy();
    expect(isPlainObject(EMPTY_ARRAY)).toBeFalsy();
    expect(isPlainObject(EMPTY_SET)).toBeFalsy();
    expect(isPlainObject(EMPTY_MAP)).toBeFalsy();
    expect(isPlainObject(anonymousArrowFn)).toBeFalsy();
    expect(isPlainObject(anonymousFn)).toBeFalsy();
    expect(isPlainObject(DEFAULT_MAYBE)).toBeFalsy();
    expect(isPlainObject(Nothing)).toBeFalsy();
  });
});
