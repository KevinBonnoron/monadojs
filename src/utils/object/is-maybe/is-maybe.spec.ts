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
import { isMaybe } from './is-maybe';

describe('isMaybe', () => {
  it('should return true', () => {
    expect(isMaybe(Just(1))).toBeTruthy();
    expect(isMaybe(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isMaybe(null)).toBeFalsy();
    expect(isMaybe(undefined)).toBeFalsy();
    expect(isMaybe('a')).toBeFalsy();
    expect(isMaybe(0)).toBeFalsy();
    expect(isMaybe(true)).toBeFalsy();
    expect(isMaybe(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isMaybe(DEFAULT_DATE)).toBeFalsy();
    expect(isMaybe(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isMaybe(DEFAULT_REGEX)).toBeFalsy();
    expect(isMaybe(EMPTY_ARRAY)).toBeFalsy();
    expect(isMaybe(EMPTY_SET)).toBeFalsy();
    expect(isMaybe(EMPTY_MAP)).toBeFalsy();
    expect(isMaybe(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isMaybe(anonymousArrowFn)).toBeFalsy();
    expect(isMaybe(anonymousFn)).toBeFalsy();
  });
});
