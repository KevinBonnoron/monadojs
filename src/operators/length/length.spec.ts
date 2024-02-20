import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { length } from './length';

describe('length', () => {
  describe('Array', () => {
    const operator = length();

    it('should return the length', () => {
      const source = NUMBER_ARRAY;
      expect(operator(source)).toStrictEqual(9);
    });
  });

  describe('Set', () => {
    const operator = length();

    it('should return the length', () => {
      const source = NUMBER_SET;
      expect(operator(source)).toStrictEqual(9);
    });
  });

  describe('Map', () => {
    const operator = length();

    it('should return the length', () => {
      const source = NUMBER_MAP;
      expect(operator(source)).toStrictEqual(9);
    });
  });

  describe('PlainObject', () => {
    const operator = length();

    it('should return the length', () => {
      const source = { a: 0, b: 1, c: 2, d: { e: 3 } };
      expect(operator(source)).toStrictEqual(4);
    });
  });

  describe('others', () => {
    const operator = length();

    it('should return 0', () => {
      expect(operator('a')).toStrictEqual(0);
      expect(operator(0)).toStrictEqual(0);
      expect(operator(true)).toStrictEqual(0);
      expect(operator(DEFAULT_DATE)).toStrictEqual(0);
      expect(operator(/a/)).toStrictEqual(0);
      expect(operator(anonymousFn)).toStrictEqual(0);
      expect(operator(anonymousArrowFn)).toStrictEqual(0);
    });
  });
});
