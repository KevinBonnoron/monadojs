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
import { isTrue } from '../is-true/is-true';

describe('isTrue', () => {
  it('should return true', () => {
    expect(isTrue(true)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isTrue(null)).toBeFalsy();
    expect(isTrue(undefined)).toBeFalsy();
    expect(isTrue('a')).toBeFalsy();
    expect(isTrue(0)).toBeFalsy();
    expect(isTrue(false)).toBeFalsy();
    expect(isTrue(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isTrue(DEFAULT_DATE)).toBeFalsy();
    expect(isTrue(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isTrue(DEFAULT_REGEX)).toBeFalsy();
    expect(isTrue(EMPTY_ARRAY)).toBeFalsy();
    expect(isTrue(EMPTY_SET)).toBeFalsy();
    expect(isTrue(EMPTY_MAP)).toBeFalsy();
    expect(isTrue(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isTrue(anonymousArrowFn)).toBeFalsy();
    expect(isTrue(anonymousFn)).toBeFalsy();
    expect(isTrue(DEFAULT_MAYBE)).toBeFalsy();
    expect(isTrue(Nothing)).toBeFalsy();
  });
});
