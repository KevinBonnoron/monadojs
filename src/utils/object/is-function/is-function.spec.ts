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
import { isFunction } from './is-function';

describe('isFunction', () => {
  it('should return true', () => {
    expect(isFunction(anonymousArrowFn)).toBeTruthy();
    expect(isFunction(anonymousFn)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction(0)).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isFunction(DEFAULT_DATE)).toBeFalsy();
    expect(isFunction(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isFunction(DEFAULT_REGEX)).toBeFalsy();
    expect(isFunction(EMPTY_ARRAY)).toBeFalsy();
    expect(isFunction(EMPTY_SET)).toBeFalsy();
    expect(isFunction(EMPTY_MAP)).toBeFalsy();
    expect(isFunction(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isFunction(DEFAULT_MAYBE)).toBeFalsy();
    expect(isFunction(Nothing)).toBeFalsy();
  });
});
