import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { concat } from './concat';

describe('concat', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should concat', () => {
      const operator = concat(10);
      expect(operator(source)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(source).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should concat', () => {
      const operator = concat(10);
      expect(operator(source)).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      expect(source).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should concat', () => {
      const operator = concat([9, 10]);
      expect(operator(source)).toStrictEqual(
        new Map([
          [0, 1],
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
});
