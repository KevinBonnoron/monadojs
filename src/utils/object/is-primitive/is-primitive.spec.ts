import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isPrimitive } from './is-primitive';

describe('isPrimitive', () => {
  it('should return true', () => {
    expect(isPrimitive('a')).toBeTruthy();
    expect(isPrimitive(0)).toBeTruthy();
    expect(isPrimitive(true)).toBeTruthy();
    expect(isPrimitive(Symbol())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isPrimitive(null)).toBeFalsy();
    expect(isPrimitive(undefined)).toBeFalsy();
    expect(isPrimitive(new Date())).toBeFalsy();
    expect(isPrimitive(Promise.resolve())).toBeFalsy();
    expect(isPrimitive(new RegExp(''))).toBeFalsy();
    expect(isPrimitive([])).toBeFalsy();
    expect(isPrimitive(new Set())).toBeFalsy();
    expect(isPrimitive(new Map())).toBeFalsy();
    expect(isPrimitive({})).toBeFalsy();
    expect(isPrimitive(() => {})).toBeFalsy();
    expect(isPrimitive(function () {})).toBeFalsy();
    expect(isPrimitive(Just(1))).toBeFalsy();
    expect(isPrimitive(Nothing)).toBeFalsy();
  });
});
