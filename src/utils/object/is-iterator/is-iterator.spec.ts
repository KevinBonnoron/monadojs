import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isIterator } from './is-iterator';

describe('isIterator', () => {
  // TODO: add a "should return true" test
  it('should return false', () => {
    expect(isIterator(null)).toBeFalsy();
    expect(isIterator(undefined)).toBeFalsy();
    expect(isIterator('a')).toBeFalsy();
    expect(isIterator(0)).toBeFalsy();
    expect(isIterator(true)).toBeFalsy();
    expect(isIterator(DEFAULT_SYMBOL)).toBeFalsy();
    expect(isIterator(DEFAULT_DATE)).toBeFalsy();
    expect(isIterator(EMPTY_RESOLVED_PROMISE)).toBeFalsy();
    expect(isIterator(DEFAULT_REGEX)).toBeFalsy();
    expect(isIterator(EMPTY_ARRAY)).toBeFalsy();
    expect(isIterator(EMPTY_SET)).toBeFalsy();
    expect(isIterator(EMPTY_MAP)).toBeFalsy();
    expect(isIterator(EMPTY_PLAIN_OBJECT)).toBeFalsy();
    expect(isIterator(anonymousArrowFn)).toBeFalsy();
    expect(isIterator(anonymousFn)).toBeFalsy();
    expect(isIterator(DEFAULT_MAYBE)).toBeFalsy();
    expect(isIterator(Nothing)).toBeFalsy();
  });
});
