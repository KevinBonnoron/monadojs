import { describe, expect, it } from 'vitest';
import { median } from './median';

describe('median', () => {
  describe('odd amount of numbers', () => {
    it('should return the median of numbers', () => {
      const values = [3, 13, 2, 34, 11, 26, 47];
      expect(values.reduce(median())).toStrictEqual(13);
    });
  });

  describe('even amount of numbers', () => {
    it('should return the median of numbers', () => {
      const values = [3, 13, 2, 34, 11, 17, 27, 47];
      expect(values.reduce(median())).toStrictEqual(15);
    });
  });
});
