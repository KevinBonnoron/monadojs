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
import { isUndefined } from './is-undefined';

describe('isUndefined', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined('a')).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isUndefined(DEFAULT_DATE)).toBeFalsy();
    expect(isUndefined(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isUndefined(DEFAULT_REGEX)).toBeFalsy();
    expect(isUndefined(EMPTY_ARRAY)).toBeFalsy();
    expect(isUndefined(EMPTY_SET)).toBeFalsy();
    expect(isUndefined(EMPTY_MAP)).toBeFalsy();
    expect(isUndefined(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isUndefined(anonymousArrowFn)).toBeFalsy();
    expect(isUndefined(anonymousFn)).toBeFalsy();
    expect(isUndefined(Just(1))).toBeFalsy();
    expect(isUndefined(Nothing)).toBeFalsy();
  });
});
