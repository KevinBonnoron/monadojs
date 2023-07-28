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
import { isDate } from './is-date';

describe('isDate', () => {
  it('should return true', () => {
    expect(isDate(DEFAULT_DATE)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isDate(null)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate('a')).toBeFalsy();
    expect(isDate(0)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isDate(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isDate(DEFAULT_REGEX)).toBeFalsy();
    expect(isDate(EMPTY_ARRAY)).toBeFalsy();
    expect(isDate(EMPTY_SET)).toBeFalsy();
    expect(isDate(EMPTY_MAP)).toBeFalsy();
    expect(isDate(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isDate(anonymousArrowFn)).toBeFalsy();
    expect(isDate(anonymousFn)).toBeFalsy();
    expect(isDate(DEFAULT_MAYBE)).toBeFalsy();
    expect(isDate(Nothing)).toBeFalsy();
  });
});
