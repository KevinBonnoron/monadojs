import { describe, expect, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { entries } from './entries';

describe('entries', () => {
  describe('Array', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = [1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn];
      const expected = [
        [0, 1],
        [1, true],
        [2, 'a'],
        [3, EMPTY_ARRAY],
        [4, EMPTY_PLAIN_OBJECT],
        [5, anonymousFn],
        [6, anonymousArrowFn]
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = new Set<any>([1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn]);
      const expected = [
        [0, 1],
        [1, true],
        [2, 'a'],
        [3, EMPTY_ARRAY],
        [4, EMPTY_PLAIN_OBJECT],
        [5, anonymousFn],
        [6, anonymousArrowFn]
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = new Map<any, any>([
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', EMPTY_ARRAY],
        ['e', EMPTY_PLAIN_OBJECT],
        ['f', anonymousFn],
        ['g', anonymousArrowFn]
      ]);
      const expected = [
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', EMPTY_ARRAY],
        ['e', EMPTY_PLAIN_OBJECT],
        ['f', anonymousFn],
        ['g', anonymousArrowFn]
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = { a: 1, b: true, c: 'a', d: EMPTY_ARRAY, e: EMPTY_PLAIN_OBJECT, f: anonymousFn, g: anonymousArrowFn };
      const expected = [
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', EMPTY_ARRAY],
        ['e', EMPTY_PLAIN_OBJECT],
        ['f', anonymousFn],
        ['g', anonymousArrowFn]
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });
});
