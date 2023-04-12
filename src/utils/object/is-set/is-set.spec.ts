import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isSet } from './is-set';

describe('isSet', () => {
  it('should return true', () => {
    expect(isSet(new Set())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSet(null)).toBeFalsy();
    expect(isSet(undefined)).toBeFalsy();
    expect(isSet('a')).toBeFalsy();
    expect(isSet(0)).toBeFalsy();
    expect(isSet(false)).toBeFalsy();
    expect(isSet(Symbol())).toBeFalsy();
    expect(isSet(new Date())).toBeFalsy();
    expect(isSet(Promise.resolve())).toBeFalsy();
    expect(isSet(new RegExp(''))).toBeFalsy();
    expect(isSet([])).toBeFalsy();
    expect(isSet(new Map())).toBeFalsy();
    expect(isSet({})).toBeFalsy();
    expect(isSet(() => {})).toBeFalsy();
    expect(isSet(function () {})).toBeFalsy();
    expect(isSet(Just(1))).toBeFalsy();
    expect(isSet(Nothing)).toBeFalsy();
  });
});
