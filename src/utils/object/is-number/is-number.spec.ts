import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isNumber } from './is-number';

describe('isNumber', () => {
  it('should return true', () => {
    expect(isNumber(0)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber('a')).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(Symbol())).toBeFalsy();
    expect(isNumber(new Date())).toBeFalsy();
    expect(isNumber(Promise.resolve())).toBeFalsy();
    expect(isNumber(new RegExp(''))).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber(new Set())).toBeFalsy();
    expect(isNumber(new Map())).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(() => {})).toBeFalsy();
    expect(isNumber(function () {})).toBeFalsy();
    expect(isNumber(Just(1))).toBeFalsy();
    expect(isNumber(Nothing)).toBeFalsy();
  });
});
