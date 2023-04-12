import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isSymbol } from './is-symbol';

describe('isSymbol', () => {
  it('should return true', () => {
    expect(isSymbol(Symbol())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSymbol(null)).toBeFalsy();
    expect(isSymbol(undefined)).toBeFalsy();
    expect(isSymbol('a')).toBeFalsy();
    expect(isSymbol(0)).toBeFalsy();
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol(new Date())).toBeFalsy();
    expect(isSymbol(Promise.resolve())).toBeFalsy();
    expect(isSymbol(new RegExp(''))).toBeFalsy();
    expect(isSymbol([])).toBeFalsy();
    expect(isSymbol(new Set())).toBeFalsy();
    expect(isSymbol(new Map())).toBeFalsy();
    expect(isSymbol({})).toBeFalsy();
    expect(isSymbol(() => {})).toBeFalsy();
    expect(isSymbol(function () {})).toBeFalsy();
    expect(isSymbol(Just(1))).toBeFalsy();
    expect(isSymbol(Nothing)).toBeFalsy();
  });
});
