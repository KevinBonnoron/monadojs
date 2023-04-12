import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isDate } from './is-date';

describe('isDate', () => {
  it('should return true', () => {
    expect(isDate(new Date())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isDate(null)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate('a')).toBeFalsy();
    expect(isDate(0)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate(Symbol())).toBeFalsy();
    expect(isDate(Promise.resolve())).toBeFalsy();
    expect(isDate(new RegExp(''))).toBeFalsy();
    expect(isDate([])).toBeFalsy();
    expect(isDate(new Set())).toBeFalsy();
    expect(isDate(new Map())).toBeFalsy();
    expect(isDate({})).toBeFalsy();
    expect(isDate(() => {})).toBeFalsy();
    expect(isDate(function () {})).toBeFalsy();
    expect(isDate(Just(1))).toBeFalsy();
    expect(isDate(Nothing)).toBeFalsy();
  });
});
