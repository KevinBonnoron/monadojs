import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isObject } from './is-object';

describe('isObject', () => {
  it('should return true', () => {
    expect(isObject(new Date())).toBeTruthy();
    expect(isObject(Promise.resolve())).toBeTruthy();
    expect(isObject(new RegExp(''))).toBeTruthy();
    expect(isObject(new Set())).toBeTruthy();
    expect(isObject(new Map())).toBeTruthy();
    expect(isObject({})).toBeTruthy();
    expect(isObject(Just(1))).toBeTruthy();
    expect(isObject(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject('a')).toBeFalsy();
    expect(isObject(0)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject(Symbol())).toBeFalsy();
    expect(isObject([])).toBeFalsy();
    expect(isObject(() => {})).toBeFalsy();
    expect(isObject(function () {})).toBeFalsy();
  });
});
