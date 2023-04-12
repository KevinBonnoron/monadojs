import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isRegExp } from './is-regexp';

describe('isRegExp', () => {
  it('should return true', () => {
    expect(isRegExp(new RegExp(''))).toBeTruthy();
  });

  it('should return false', () => {
    expect(isRegExp(null)).toBeFalsy();
    expect(isRegExp(undefined)).toBeFalsy();
    expect(isRegExp('a')).toBeFalsy();
    expect(isRegExp(0)).toBeFalsy();
    expect(isRegExp(false)).toBeFalsy();
    expect(isRegExp(Symbol())).toBeFalsy();
    expect(isRegExp(new Date())).toBeFalsy();
    expect(isRegExp(Promise.resolve())).toBeFalsy();
    expect(isRegExp([])).toBeFalsy();
    expect(isRegExp(new Set())).toBeFalsy();
    expect(isRegExp(new Map())).toBeFalsy();
    expect(isRegExp({})).toBeFalsy();
    expect(isRegExp(() => {})).toBeFalsy();
    expect(isRegExp(function () {})).toBeFalsy();
    expect(isRegExp(Just(1))).toBeFalsy();
    expect(isRegExp(Nothing)).toBeFalsy();
  });
});
