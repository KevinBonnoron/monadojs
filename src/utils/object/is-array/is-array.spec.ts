import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isArray } from './is-array';

describe('isArray', () => {
  it('should return true', () => {
    expect(isArray([])).toBeTruthy();
  });

  it('should return false', () => {
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray(0)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
    expect(isArray(Symbol())).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray(Promise.resolve())).toBeFalsy();
    expect(isArray(new RegExp(''))).toBeFalsy();
    expect(isArray(new Set())).toBeFalsy();
    expect(isArray(new Map())).toBeFalsy();
    expect(isArray({})).toBeFalsy();
    expect(isArray(() => {})).toBeFalsy();
    expect(isArray(function () {})).toBeFalsy();
    expect(isArray(Just(1))).toBeFalsy();
    expect(isArray(Nothing)).toBeFalsy();
  });
});
