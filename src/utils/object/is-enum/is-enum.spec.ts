import { describe, expect, it } from 'vitest';
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
    expect(isEnum(DummyEnum, Symbol())).toBeFalsy();
    expect(isEnum(DummyEnum, new Date())).toBeFalsy();
    expect(isEnum(DummyEnum, Promise.resolve())).toBeFalsy();
    expect(isEnum(DummyEnum, new RegExp(''))).toBeFalsy();
    expect(isEnum(DummyEnum, [])).toBeFalsy();
    expect(isEnum(DummyEnum, new Set())).toBeFalsy();
    expect(isEnum(DummyEnum, new Map())).toBeFalsy();
    expect(isEnum(DummyEnum, {})).toBeFalsy();
    expect(isEnum(DummyEnum, () => {})).toBeFalsy();
    expect(isEnum(DummyEnum, function () {})).toBeFalsy();
    expect(isEnum(DummyEnum, Just(1))).toBeFalsy();
    expect(isEnum(DummyEnum, Nothing)).toBeFalsy();
  });
});
