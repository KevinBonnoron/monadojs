import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  describe('Array', () => {
    it('should return last element', () => {
      const source = NUMBER_ARRAY;
      const operator = pop();
      const expected = 9;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Set', () => {
    it('should return last element', () => {
      const source = NUMBER_SET;
      const operator = pop();
      const expected = 9;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
    });
  });

  describe('Map', () => {
    it('should return last element', () => {
      const source = NUMBER_MAP;
      const operator = pop();
      const expected = [8, 9];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8]
        ])
      );
    });
  });
});
