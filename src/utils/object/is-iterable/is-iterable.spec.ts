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
import { isIterable } from './is-iterable';

describe('isIterable', () => {
  it('should return true', () => {
    expect(isIterable('a')).toBeTruthy();
    expect(isIterable(EMPTY_ARRAY)).toBeTruthy();
    expect(isIterable(EMPTY_SET)).toBeTruthy();
    expect(isIterable(EMPTY_MAP)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isIterable(null)).toBeFalsy();
    expect(isIterable(undefined)).toBeFalsy();
    expect(isIterable(0)).toBeFalsy();
    expect(isIterable(true)).toBeFalsy();
    expect(isIterable(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isIterable(DEFAULT_DATE)).toBeFalsy();
    expect(isIterable(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isIterable(DEFAULT_REGEX)).toBeFalsy();
    expect(isIterable(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isIterable(anonymousArrowFn)).toBeFalsy();
    expect(isIterable(anonymousFn)).toBeFalsy();
    expect(isIterable(Just(1))).toBeFalsy();
    expect(isIterable(Nothing)).toBeFalsy();
  });
});
