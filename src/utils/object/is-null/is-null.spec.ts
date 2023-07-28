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
import { isNull } from './is-null';

describe('isNull', () => {
  it('should return true', () => {
    expect(isNull(null)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNull(undefined)).toBeFalsy();
    expect(isNull('a')).toBeFalsy();
    expect(isNull(0)).toBeFalsy();
    expect(isNull(true)).toBeFalsy();
    expect(isNull(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isNull(DEFAULT_DATE)).toBeFalsy();
    expect(isNull(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isNull(DEFAULT_REGEX)).toBeFalsy();
    expect(isNull(EMPTY_ARRAY)).toBeFalsy();
    expect(isNull(EMPTY_SET)).toBeFalsy();
    expect(isNull(EMPTY_MAP)).toBeFalsy();
    expect(isNull(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isNull(anonymousArrowFn)).toBeFalsy();
    expect(isNull(anonymousFn)).toBeFalsy();
    expect(isNull(DEFAULT_MAYBE)).toBeFalsy();
    expect(isNull(Nothing)).toBeFalsy();
  });
});
