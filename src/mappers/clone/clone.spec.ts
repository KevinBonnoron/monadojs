import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { clone } from './clone';

describe('clone', () => {
  const operator = clone();

  describe('Date', () => {
    it('should clone', () => {
      const source = new Date('2020-01-01');
      const cloned = operator(source);
      cloned.setMonth(5);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Date('2020-06-01'));
      expect(source).toStrictEqual(new Date('2020-01-01'));
    });
  });

  describe('Array', () => {
    it('should clone', () => {
      const source = NUMBER_ARRAY;
      const cloned = operator(source);
      cloned.push(10);
      cloned.shift();

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(source).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Set', () => {
    it('should clone', () => {
      const source = NUMBER_SET;
      const cloned = operator(source);
      cloned.add(10);
      cloned.delete(1);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9, 10]));
      expect(source).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });
  });

  describe('Map', () => {
    it('should clone', () => {
      const source = NUMBER_MAP;
      const cloned = operator(source);
      cloned.set(9, 10);
      cloned.delete(0);

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual(
        new Map([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9],
          [9, 10]
        ])
      );
      expect(source).toStrictEqual(
        new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9]
        ])
      );
    });
  });

  describe('PlainObject', () => {
    it('should clone', () => {
      const source: any = { a: { b: 1, c: { d: [2] } } };
      const cloned = operator(source);
      cloned.a.c.d.push(5);
      cloned.a.b = 2;

      expect(cloned).not.toBe(source);
      expect(cloned).toStrictEqual({ a: { b: 2, c: { d: [2, 5] } } });
      expect(source).toStrictEqual({ a: { b: 1, c: { d: [2] } } });
    });
  });
});
