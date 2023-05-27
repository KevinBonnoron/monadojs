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
import { isObject } from './is-object';

describe('isObject', () => {
  it('should return true', () => {
    expect(isObject(DEFAULT_DATE)).toBeTruthy();
    expect(isObject(EMPTY_RESOLVED_PROMISE)).toBeTruthy();
    expect(isObject(DEFAULT_REGEX)).toBeTruthy();
    expect(isObject(EMPTY_SET)).toBeTruthy();
    expect(isObject(EMPTY_MAP)).toBeTruthy();
    expect(isObject(EMPTY_PLAIN_OBJECT)).toBeTruthy();
    expect(isObject(Just(1))).toBeTruthy();
    expect(isObject(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject('a')).toBeFalsy();
    expect(isObject(0)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isObject(EMPTY_ARRAY)).toBeFalsy();
    expect(isObject(anonymousArrowFn)).toBeFalsy();
    expect(isObject(anonymousFn)).toBeFalsy();
  });
});
