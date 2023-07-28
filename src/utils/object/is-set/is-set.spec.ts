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
import { isSet } from './is-set';

describe('isSet', () => {
  it('should return true', () => {
    expect(isSet(EMPTY_SET)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSet(null)).toBeFalsy();
    expect(isSet(undefined)).toBeFalsy();
    expect(isSet('a')).toBeFalsy();
    expect(isSet(0)).toBeFalsy();
    expect(isSet(false)).toBeFalsy();
    expect(isSet(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isSet(DEFAULT_DATE)).toBeFalsy();
    expect(isSet(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isSet(DEFAULT_REGEX)).toBeFalsy();
    expect(isSet(EMPTY_ARRAY)).toBeFalsy();
    expect(isSet(EMPTY_MAP)).toBeFalsy();
    expect(isSet(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isSet(anonymousArrowFn)).toBeFalsy();
    expect(isSet(anonymousFn)).toBeFalsy();
    expect(isSet(DEFAULT_MAYBE)).toBeFalsy();
    expect(isSet(Nothing)).toBeFalsy();
  });
});
