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
import { isPropertyKey } from './is-propertykey';

describe('isPropertyKey', () => {
  it('should return true', () => {
    expect(isPropertyKey('a')).toBeTruthy();
    expect(isPropertyKey(0)).toBeTruthy();
    expect(isPropertyKey(DEFAULT_SYMBOL)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPropertyKey(null)).toBeFalsy();
    expect(isPropertyKey(undefined)).toBeFalsy();
    expect(isPropertyKey(true)).toBeFalsy();
    expect(isPropertyKey(DEFAULT_DATE)).toBeFalsy();
    expect(isPropertyKey(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isPropertyKey(DEFAULT_REGEX)).toBeFalsy();
    expect(isPropertyKey(EMPTY_ARRAY)).toBeFalsy();
    expect(isPropertyKey(EMPTY_SET)).toBeFalsy();
    expect(isPropertyKey(EMPTY_MAP)).toBeFalsy();
    expect(isPropertyKey(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isPropertyKey(anonymousArrowFn)).toBeFalsy();
    expect(isPropertyKey(anonymousFn)).toBeFalsy();
    expect(isPropertyKey(Just(1))).toBeFalsy();
    expect(isPropertyKey(Nothing)).toBeFalsy();
  });
});
