import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isEnum } from './is-enum';

enum DummyEnum {
  FOO = 0,
  BAR = 1,
}

describe('isEnum', () => {
  it('should return true', () => {
    expect(isEnum(DummyEnum.FOO, DummyEnum)).toBeTruthy();
    expect(isEnum(0, DummyEnum)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isEnum(null, DummyEnum)).toBeFalsy();
    expect(isEnum(undefined, DummyEnum)).toBeFalsy();
    expect(isEnum('a', DummyEnum)).toBeFalsy();
    expect(isEnum(true, DummyEnum)).toBeFalsy();
    expect(isEnum(DEFAULT_SYMBOL, DummyEnum)).toBeFalsy();
    expect(isEnum(DEFAULT_DATE, DummyEnum)).toBeFalsy();
    expect(isEnum(EMPTY_RESOLVED_PROMISE, DummyEnum)).toBeFalsy();
    expect(isEnum(DEFAULT_REGEX, DummyEnum)).toBeFalsy();
    expect(isEnum(EMPTY_ARRAY, DummyEnum)).toBeFalsy();
    expect(isEnum(EMPTY_SET, DummyEnum)).toBeFalsy();
    expect(isEnum(EMPTY_MAP, DummyEnum)).toBeFalsy();
    expect(isEnum(EMPTY_PLAIN_OBJECT, DummyEnum)).toBeFalsy();
    expect(isEnum(anonymousArrowFn, DummyEnum)).toBeFalsy();
    expect(isEnum(anonymousFn, DummyEnum)).toBeFalsy();
    expect(isEnum(DEFAULT_MAYBE, DummyEnum)).toBeFalsy();
    expect(isEnum(Nothing, DummyEnum)).toBeFalsy();
  });
});
