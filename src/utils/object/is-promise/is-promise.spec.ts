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
import { isPromise } from './is-promise';

describe('isPromise', () => {
  it('should return true', () => {
    expect(isPromise(EMPTY_RESOLVED_PROMISE)).toBeTruthy();
    // TODO: it trigger an ERR_UNHANDLED_REJECTION
    // expect(isPromise(Promise.reject())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPromise(null)).toBeFalsy();
    expect(isPromise(undefined)).toBeFalsy();
    expect(isPromise('a')).toBeFalsy();
    expect(isPromise(0)).toBeFalsy();
    expect(isPromise(false)).toBeFalsy();
    expect(isPromise(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isPromise(DEFAULT_DATE)).toBeFalsy();
    expect(isPromise(DEFAULT_REGEX)).toBeFalsy();
    expect(isPromise(EMPTY_ARRAY)).toBeFalsy();
    expect(isPromise(EMPTY_SET)).toBeFalsy();
    expect(isPromise(EMPTY_MAP)).toBeFalsy();
    expect(isPromise(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isPromise(anonymousArrowFn)).toBeFalsy();
    expect(isPromise(anonymousFn)).toBeFalsy();
    expect(isPromise(DEFAULT_MAYBE)).toBeFalsy();
    expect(isPromise(Nothing)).toBeFalsy();
  });
});
