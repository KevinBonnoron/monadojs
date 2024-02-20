import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { reverse } from './reverse';

describe('reverse', () => {
  const operator = reverse();

  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should reverse', () => {
      expect(operator(source)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should reverse', () => {
      expect(operator([...source])).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should reverse', () => {
      expect(operator([...source])).toStrictEqual([
        [8, 9],
        [7, 8],
        [6, 7],
        [5, 6],
        [4, 5],
        [3, 4],
        [2, 3],
        [1, 2],
        [0, 1],
      ]);
    });
  });
});
