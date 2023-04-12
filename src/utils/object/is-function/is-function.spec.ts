import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isFunction } from './is-function';

describe('isFunction', () => {
  it('should return true', () => {
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(function () {})).toBeTruthy();
  });

  it('should return false', () => {
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction(0)).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(Symbol())).toBeFalsy();
    expect(isFunction(new Date())).toBeFalsy();
    expect(isFunction(Promise.resolve())).toBeFalsy();
    expect(isFunction(new RegExp(''))).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction(new Set())).toBeFalsy();
    expect(isFunction(new Map())).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction(Just(1))).toBeFalsy();
    expect(isFunction(Nothing)).toBeFalsy();
  });
});
