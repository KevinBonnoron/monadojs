import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isNull } from './is-null';

describe('isNull', () => {
  it('should return true', () => {
    expect(isNull(null)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNull(undefined)).toBeFalsy();
    expect(isNull('a')).toBeFalsy();
    expect(isNull(0)).toBeFalsy();
    expect(isNull(true)).toBeFalsy();
    expect(isNull(Symbol())).toBeFalsy();
    expect(isNull(new Date())).toBeFalsy();
    expect(isNull(Promise.resolve())).toBeFalsy();
    expect(isNull(new RegExp(''))).toBeFalsy();
    expect(isNull([])).toBeFalsy();
    expect(isNull(new Set())).toBeFalsy();
    expect(isNull(new Map())).toBeFalsy();
    expect(isNull({})).toBeFalsy();
    expect(isNull(() => {})).toBeFalsy();
    expect(isNull(function () {})).toBeFalsy();
    expect(isNull(Just(1))).toBeFalsy();
    expect(isNull(Nothing)).toBeFalsy();
  });
});
