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
import { isEnum } from './is-enum';

enum DummyEnum {
  FOO,
  BAR
}

describe('isEnum', () => {
  it('should return true', () => {
    expect(isEnum(DummyEnum, DummyEnum.FOO)).toBeTruthy();
    expect(isEnum(DummyEnum, 0)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isEnum(DummyEnum, null)).toBeFalsy();
    expect(isEnum(DummyEnum, undefined)).toBeFalsy();
    expect(isEnum(DummyEnum, 'a')).toBeFalsy();
    expect(isEnum(DummyEnum, true)).toBeFalsy();
    expect(isEnum(DummyEnum, DEFAULT_SYMBOL)).toBeFalsy();
    expect(isEnum(DummyEnum, DEFAULT_DATE)).toBeFalsy();
    expect(isEnum(DummyEnum, EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isEnum(DummyEnum, DEFAULT_REGEX)).toBeFalsy();
    expect(isEnum(DummyEnum, EMPTY_ARRAY)).toBeFalsy();
    expect(isEnum(DummyEnum, EMPTY_SET)).toBeFalsy();
    expect(isEnum(DummyEnum, EMPTY_MAP)).toBeFalsy();
    expect(isEnum(DummyEnum, EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isEnum(DummyEnum, anonymousArrowFn)).toBeFalsy();
    expect(isEnum(DummyEnum, anonymousFn)).toBeFalsy();
    expect(isEnum(DummyEnum, Just(1))).toBeFalsy();
    expect(isEnum(DummyEnum, Nothing)).toBeFalsy();
  });
});
