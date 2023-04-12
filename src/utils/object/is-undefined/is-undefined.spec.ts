import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isUndefined } from './is-undefined';

describe('isUndefined', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined('a')).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(Symbol())).toBeFalsy();
    expect(isUndefined(new Date())).toBeFalsy();
    expect(isUndefined(Promise.resolve())).toBeFalsy();
    expect(isUndefined(new RegExp(''))).toBeFalsy();
    expect(isUndefined([])).toBeFalsy();
    expect(isUndefined(new Set())).toBeFalsy();
    expect(isUndefined(new Map())).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(() => {})).toBeFalsy();
    expect(isUndefined(function () {})).toBeFalsy();
    expect(isUndefined(Just(1))).toBeFalsy();
    expect(isUndefined(Nothing)).toBeFalsy();
  });
});
