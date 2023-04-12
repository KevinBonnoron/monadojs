import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isPropertyKey } from './is-propertykey';

describe('isPropertyKey', () => {
  it('should return true', () => {
    expect(isPropertyKey('a')).toBeTruthy();
    expect(isPropertyKey(0)).toBeTruthy();
    expect(isPropertyKey(Symbol())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPropertyKey(null)).toBeFalsy();
    expect(isPropertyKey(undefined)).toBeFalsy();
    expect(isPropertyKey(true)).toBeFalsy();
    expect(isPropertyKey(new Date())).toBeFalsy();
    expect(isPropertyKey(Promise.resolve())).toBeFalsy();
    expect(isPropertyKey(new RegExp(''))).toBeFalsy();
    expect(isPropertyKey([])).toBeFalsy();
    expect(isPropertyKey(new Set())).toBeFalsy();
    expect(isPropertyKey(new Map())).toBeFalsy();
    expect(isPropertyKey({})).toBeFalsy();
    expect(isPropertyKey(() => {})).toBeFalsy();
    expect(isPropertyKey(function () {})).toBeFalsy();
    expect(isPropertyKey(Just(1))).toBeFalsy();
    expect(isPropertyKey(Nothing)).toBeFalsy();
  });
});
