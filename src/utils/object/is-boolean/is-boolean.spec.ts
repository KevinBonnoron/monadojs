import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isBoolean } from './is-boolean';

describe('isBoolean', () => {
  it('should return true', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean('a')).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(Symbol())).toBeFalsy();
    expect(isBoolean(new Date())).toBeFalsy();
    expect(isBoolean(Promise.resolve())).toBeFalsy();
    expect(isBoolean(new RegExp(''))).toBeFalsy();
    expect(isBoolean([])).toBeFalsy();
    expect(isBoolean(new Set())).toBeFalsy();
    expect(isBoolean(new Map())).toBeFalsy();
    expect(isBoolean({})).toBeFalsy();
    expect(isBoolean(() => {})).toBeFalsy();
    expect(isBoolean(function () {})).toBeFalsy();
    expect(isBoolean(Just(1))).toBeFalsy();
    expect(isBoolean(Nothing)).toBeFalsy();
  });
});
