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
import { isFalse } from './is-false';

describe('isFalse', () => {
  it('should return true', () => {
    expect(isFalse(false)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isFalse(null)).toBeFalsy();
    expect(isFalse(undefined)).toBeFalsy();
    expect(isFalse('a')).toBeFalsy();
    expect(isFalse(0)).toBeFalsy();
    expect(isFalse(true)).toBeFalsy();
    expect(isFalse(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isFalse(DEFAULT_DATE)).toBeFalsy();
    expect(isFalse(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isFalse(DEFAULT_REGEX)).toBeFalsy();
    expect(isFalse(EMPTY_ARRAY)).toBeFalsy();
    expect(isFalse(EMPTY_SET)).toBeFalsy();
    expect(isFalse(EMPTY_MAP)).toBeFalsy();
    expect(isFalse(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isFalse(anonymousArrowFn)).toBeFalsy();
    expect(isFalse(anonymousFn)).toBeFalsy();
    expect(isFalse(Just(1))).toBeFalsy();
    expect(isFalse(Nothing)).toBeFalsy();
  });
});
