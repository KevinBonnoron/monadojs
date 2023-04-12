import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isFalse } from './is-false';

describe('isFalse', () => {
  it('should return true', () => {
    expect(isFalse(false)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isFalse(null)).toBeFalsy();
    expect(isFalse(undefined)).toBeFalsy();
    expect(isFalse('a')).toBeFalsy();
    expect(isFalse(0)).toBeFalsy();
    expect(isFalse(true)).toBeFalsy();
    expect(isFalse(Symbol())).toBeFalsy();
    expect(isFalse(new Date())).toBeFalsy();
    expect(isFalse(Promise.resolve())).toBeFalsy();
    expect(isFalse(new RegExp(''))).toBeFalsy();
    expect(isFalse([])).toBeFalsy();
    expect(isFalse(new Set())).toBeFalsy();
    expect(isFalse(new Map())).toBeFalsy();
    expect(isFalse({})).toBeFalsy();
    expect(isFalse(() => {})).toBeFalsy();
    expect(isFalse(function () {})).toBeFalsy();
    expect(isFalse(Just(1))).toBeFalsy();
    expect(isFalse(Nothing)).toBeFalsy();
  });
});
