import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isMaybe } from './is-maybe';

describe('isMaybe', () => {
  it('should return true', () => {
    expect(isMaybe(Just(1))).toBeTruthy();
    expect(isMaybe(Nothing)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isMaybe(null)).toBeFalsy();
    expect(isMaybe(undefined)).toBeFalsy();
    expect(isMaybe('a')).toBeFalsy();
    expect(isMaybe(0)).toBeFalsy();
    expect(isMaybe(true)).toBeFalsy();
    expect(isMaybe(Symbol())).toBeFalsy();
    expect(isMaybe(new Date())).toBeFalsy();
    expect(isMaybe(Promise.resolve())).toBeFalsy();
    expect(isMaybe(new RegExp(''))).toBeFalsy();
    expect(isMaybe([])).toBeFalsy();
    expect(isMaybe(new Set())).toBeFalsy();
    expect(isMaybe(new Map())).toBeFalsy();
    expect(isMaybe({})).toBeFalsy();
    expect(isMaybe(() => {})).toBeFalsy();
    expect(isMaybe(function () {})).toBeFalsy();
  });
});
