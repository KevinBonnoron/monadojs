import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isPlainObject } from './is-plain-object';

describe('isPlainObject', () => {
  it('should return true', () => {
    expect(isPlainObject({})).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
    expect(isPlainObject('a')).toBeFalsy();
    expect(isPlainObject(0)).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(Symbol())).toBeFalsy();
    expect(isPlainObject(new Date())).toBeFalsy();
    expect(isPlainObject(Promise.resolve())).toBeFalsy();
    expect(isPlainObject(new RegExp(''))).toBeFalsy();
    expect(isPlainObject([])).toBeFalsy();
    expect(isPlainObject(new Set())).toBeFalsy();
    expect(isPlainObject(new Map())).toBeFalsy();
    expect(isPlainObject(() => {})).toBeFalsy();
    expect(isPlainObject(function () {})).toBeFalsy();
    expect(isPlainObject(Just(1))).toBeFalsy();
    expect(isPlainObject(Nothing)).toBeFalsy();
  });
});
