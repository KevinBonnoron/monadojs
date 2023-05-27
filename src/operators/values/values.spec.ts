import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_REGEX,
  DEFAULT_SYMBOL,
  DIVERSE_SET,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../tests/test.data';
import { Just, Nothing } from '../../utils';
import { values } from './values';

describe('values', () => {
  describe('Array', () => {
    const operator = values();

    it('should return values', () => {
      const source = [1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn];
      const expected = [1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const operator = values();

    it('should return values', () => {
      const source = DIVERSE_SET;
      const expected = [
        null,
        undefined,
        'a',
        0,
        true,
        DEFAULT_SYMBOL,
        DEFAULT_DATE,
        EMPTY_RESOLVED_PROMISE,
        DEFAULT_REGEX,
        EMPTY_ARRAY,
        EMPTY_SET,
        EMPTY_MAP,
        EMPTY_PLAIN_OBJECT,
        anonymousArrowFn,
        anonymousFn,
        Just(1),
        Nothing
      ];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const operator = values();

    it('should return values', () => {
      const source = new Map<any, any>([
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', EMPTY_ARRAY],
        ['e', EMPTY_PLAIN_OBJECT],
        ['f', anonymousFn],
        ['g', anonymousArrowFn]
      ]);

      const expected = [1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    const operator = values();

    it('should return values', () => {
      const source = { a: 1, b: true, c: 'a', d: EMPTY_ARRAY, e: EMPTY_PLAIN_OBJECT, f: anonymousFn, g: anonymousArrowFn };
      const expected = [1, true, 'a', EMPTY_ARRAY, EMPTY_PLAIN_OBJECT, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('others', () => {
    const operator = values();

    it('should return empty array', () => {
      expect([...operator('a')]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(0)]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(true)]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(DEFAULT_DATE)]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(new RegExp('a'))]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(anonymousFn)]).toStrictEqual(EMPTY_ARRAY);
      expect([...operator(anonymousArrowFn)]).toStrictEqual(EMPTY_ARRAY);
    });
  });
});
