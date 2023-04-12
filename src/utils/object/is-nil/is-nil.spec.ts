import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isNil } from './is-nil';

describe('isNil', () => {
  it('should return true', () => {
    expect(isNil(null)).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNil('a')).toBeFalsy();
    expect(isNil(0)).toBeFalsy();
    expect(isNil(true)).toBeFalsy();
    expect(isNil(Symbol())).toBeFalsy();
    expect(isNil(new Date())).toBeFalsy();
    expect(isNil(Promise.resolve())).toBeFalsy();
    expect(isNil(new RegExp(''))).toBeFalsy();
    expect(isNil([])).toBeFalsy();
    expect(isNil(new Set())).toBeFalsy();
    expect(isNil(new Map())).toBeFalsy();
    expect(isNil({})).toBeFalsy();
    expect(isNil(() => {})).toBeFalsy();
    expect(isNil(function () {})).toBeFalsy();
    expect(isNil(Just(1))).toBeFalsy();
    expect(isNil(Nothing)).toBeFalsy();
  });
});
