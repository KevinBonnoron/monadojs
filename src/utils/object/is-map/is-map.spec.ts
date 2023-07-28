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
import { isMap } from './is-map';

describe('isMap', () => {
  it('should return true', () => {
    expect(isMap(EMPTY_MAP)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isMap(null)).toBeFalsy();
    expect(isMap(undefined)).toBeFalsy();
    expect(isMap('a')).toBeFalsy();
    expect(isMap(0)).toBeFalsy();
    expect(isMap(false)).toBeFalsy();
    expect(isMap(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isMap(DEFAULT_DATE)).toBeFalsy();
    expect(isMap(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isMap(DEFAULT_REGEX)).toBeFalsy();
    expect(isMap(EMPTY_ARRAY)).toBeFalsy();
    expect(isMap(EMPTY_SET)).toBeFalsy();
    expect(isMap(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isMap(anonymousArrowFn)).toBeFalsy();
    expect(isMap(anonymousFn)).toBeFalsy();
    expect(isMap(DEFAULT_MAYBE)).toBeFalsy();
    expect(isMap(Nothing)).toBeFalsy();
  });
});
