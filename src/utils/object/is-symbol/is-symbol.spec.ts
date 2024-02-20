import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isSymbol } from './is-symbol';

describe('isSymbol', () => {
  it('should return true', () => {
    expect(isSymbol(DEFAULT_SYMBOL)).toBeTruthy();
  });

  it('should return false', () => {
    expect(isSymbol(null)).toBeFalsy();
    expect(isSymbol(undefined)).toBeFalsy();
    expect(isSymbol('a')).toBeFalsy();
    expect(isSymbol(0)).toBeFalsy();
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol(DEFAULT_DATE)).toBeFalsy();
    expect(isSymbol(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isSymbol(DEFAULT_REGEX)).toBeFalsy();
    expect(isSymbol(EMPTY_ARRAY)).toBeFalsy();
    expect(isSymbol(EMPTY_SET)).toBeFalsy();
    expect(isSymbol(EMPTY_MAP)).toBeFalsy();
    expect(isSymbol(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isSymbol(anonymousArrowFn)).toBeFalsy();
    expect(isSymbol(anonymousFn)).toBeFalsy();
    expect(isSymbol(DEFAULT_MAYBE)).toBeFalsy();
    expect(isSymbol(Nothing)).toBeFalsy();
  });
});
