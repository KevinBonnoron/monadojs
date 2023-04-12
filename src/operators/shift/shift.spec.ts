import { describe, expect, it } from 'vitest';
import { NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { shift } from './shift';

describe('shift', () => {
  const operator = shift();

  describe('Array', () => {
    it('should return first element', () => {
      const source = [0, 1, 2, 3];
      const expected = 0;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([1, 2, 3]);
    });
  });

  describe('Set', () => {
    it('should return first element', () => {
      const source = NUMBER_SET;
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9]));
    });
  });

  describe('Map', () => {
    it('should return first element', () => {
      const source = NUMBER_MAP;
      const expected = [0, 1];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(
        new Map([
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
