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
import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  it('should return true', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(DEFAULT_DATE)).toBeTruthy();
    expect(isEmpty(EMPTY_ARRAY)).toBeTruthy();
    expect(isEmpty(EMPTY_SET)).toBeTruthy();
    expect(isEmpty(EMPTY_MAP)).toBeTruthy();
    expect(isEmpty(EMPTY_PLAIN_OBJECT)).toBeTruthy();
    expect(isEmpty(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isEmpty('a')).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty(false)).toBeFalsy();
    expect(isEmpty(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isEmpty(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isEmpty(DEFAULT_REGEX)).toBeFalsy();
    expect(isEmpty(anonymousArrowFn)).toBeFalsy();
    expect(isEmpty(anonymousFn)).toBeFalsy();
    expect(isEmpty(Just(1))).toBeFalsy();
  });
});
