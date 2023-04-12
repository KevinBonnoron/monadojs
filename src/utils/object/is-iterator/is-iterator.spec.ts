import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isIterator } from './is-iterator';

describe('isIterator', () => {
  // TODO: put "should return true" tests
  it('should return false', () => {
    expect(isIterator(null)).toBeFalsy();
    expect(isIterator(undefined)).toBeFalsy();
    expect(isIterator('a')).toBeFalsy();
    expect(isIterator(0)).toBeFalsy();
    expect(isIterator(true)).toBeFalsy();
    expect(isIterator(Symbol())).toBeFalsy();
    expect(isIterator(new Date())).toBeFalsy();
    expect(isIterator(Promise.resolve())).toBeFalsy();
    expect(isIterator(new RegExp(''))).toBeFalsy();
    expect(isIterator([])).toBeFalsy();
    expect(isIterator(new Set())).toBeFalsy();
    expect(isIterator(new Map())).toBeFalsy();
    expect(isIterator({})).toBeFalsy();
    expect(isIterator(() => {})).toBeFalsy();
    expect(isIterator(function () {})).toBeFalsy();
    expect(isIterator(Just(1))).toBeFalsy();
    expect(isIterator(Nothing)).toBeFalsy();
  });
});
