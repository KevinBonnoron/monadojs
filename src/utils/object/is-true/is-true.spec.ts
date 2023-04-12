import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isTrue } from '../is-true/is-true';

describe('isTrue', () => {
  it('should return true', () => {
    expect(isTrue(true)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isTrue(null)).toBeFalsy();
    expect(isTrue(undefined)).toBeFalsy();
    expect(isTrue('a')).toBeFalsy();
    expect(isTrue(0)).toBeFalsy();
    expect(isTrue(false)).toBeFalsy();
    expect(isTrue(Symbol())).toBeFalsy();
    expect(isTrue(new Date())).toBeFalsy();
    expect(isTrue(Promise.resolve())).toBeFalsy();
    expect(isTrue(new RegExp(''))).toBeFalsy();
    expect(isTrue([])).toBeFalsy();
    expect(isTrue(new Set())).toBeFalsy();
    expect(isTrue(new Map())).toBeFalsy();
    expect(isTrue({})).toBeFalsy();
    expect(isTrue(() => {})).toBeFalsy();
    expect(isTrue(function () {})).toBeFalsy();
    expect(isTrue(Just(1))).toBeFalsy();
    expect(isTrue(Nothing)).toBeFalsy();
  });
});
