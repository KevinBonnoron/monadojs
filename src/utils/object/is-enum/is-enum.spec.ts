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
import { isEnum } from './is-enum';

enum DummyEnum {
  FOO,
  BAR
}

describe('isEnum', () => {
  const operator = isEnum(DummyEnum);
  it('should return true', () => {
    expect(operator(DummyEnum.FOO)).toBeTruthy();
    expect(operator(0)).toBeTruthy();
  });

  it('should return false', () => {
    expect(operator(null)).toBeFalsy();
    expect(operator(undefined)).toBeFalsy();
    expect(operator('a')).toBeFalsy();
    expect(operator(true)).toBeFalsy();
    expect(operator(DEFAULT_SYMBOL)).toBeFalsy();
    expect(operator(DEFAULT_DATE)).toBeFalsy();
    expect(operator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(operator(DEFAULT_REGEX)).toBeFalsy();
    expect(operator(EMPTY_ARRAY)).toBeFalsy();
    expect(operator(EMPTY_SET)).toBeFalsy();
    expect(operator(EMPTY_MAP)).toBeFalsy();
    expect(operator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(operator(anonymousArrowFn)).toBeFalsy();
    expect(operator(anonymousFn)).toBeFalsy();
    expect(operator(DEFAULT_MAYBE)).toBeFalsy();
    expect(operator(Nothing)).toBeFalsy();
  });
});
