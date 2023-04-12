import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isString } from './is-string';

describe('isString', () => {
  it('should return true', () => {
    expect(isString('a')).toBeTruthy();
  });

  it('should return false', () => {
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(0)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(Symbol())).toBeFalsy();
    expect(isString(new Date())).toBeFalsy();
    expect(isString(Promise.resolve())).toBeFalsy();
    expect(isString(new RegExp(''))).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString(new Set())).toBeFalsy();
    expect(isString(new Map())).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString(() => {})).toBeFalsy();
    expect(isString(function () {})).toBeFalsy();
    expect(isString(Just(1))).toBeFalsy();
    expect(isString(Nothing)).toBeFalsy();
  });
});
