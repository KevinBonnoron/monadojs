import { describe, expect, it } from 'vitest';
import { sort } from './sort';

describe('sort', () => {
  describe('asc', () => {
    const ascSort = (a: number, b: number) => a - b;

    it('should sort array', () => {
      const source = [0, 2, 3, 1];
      const operator = sort(ascSort);
      const expected = [0, 1, 2, 3];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should sort Set', () => {
      const source = new Set([0, 2, 3, 1]);
      const operator = sort(ascSort);
      const expected = new Set([0, 1, 2, 3]);

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort Map', () => {
      const source = new Map([
        ['a', 2],
        ['b', 1],
      ]);
      const operator = sort(ascSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const source = { a: 2, b: 1 };
      const operator = sort(ascSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('desc', () => {
    const descSort = (a: number, b: number) => b - a;

    it('should sort array', () => {
      const source = [0, 2, 3, 1];
      const operator = sort(descSort);
      const expected = [3, 2, 1, 0];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should sort Set', () => {
      const source = new Set([0, 2, 3, 1]);
      const operator = sort(descSort);
      const expected = new Set([3, 2, 1, 0]);

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort Map', () => {
      const source = new Map([
        ['a', 2],
        ['b', 1],
      ]);
      const operator = sort(descSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const source = { a: 2, b: 1 };
      const operator = sort(descSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
