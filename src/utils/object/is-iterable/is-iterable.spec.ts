import { describe, expect, it } from 'vitest';
import { Just, Nothing } from '../../maybe/maybe.utils';
import { isIterable } from './is-iterable';

describe('isIterable', () => {
  it('should return true', () => {
    expect(isIterable('a')).toBeTruthy();
    expect(isIterable([])).toBeTruthy();
    expect(isIterable(new Set())).toBeTruthy();
    expect(isIterable(new Map())).toBeTruthy();
  });

  it('should return false', () => {
    expect(isIterable(null)).toBeFalsy();
    expect(isIterable(undefined)).toBeFalsy();
    expect(isIterable(0)).toBeFalsy();
    expect(isIterable(true)).toBeFalsy();
    expect(isIterable(Symbol())).toBeFalsy();
    expect(isIterable(new Date())).toBeFalsy();
    expect(isIterable(Promise.resolve())).toBeFalsy();
    expect(isIterable(new RegExp(''))).toBeFalsy();
    expect(isIterable({})).toBeFalsy();
    expect(isIterable(() => {})).toBeFalsy();
    expect(isIterable(function () {})).toBeFalsy();
    expect(isIterable(Just(1))).toBeFalsy();
    expect(isIterable(Nothing)).toBeFalsy();
  });
});
