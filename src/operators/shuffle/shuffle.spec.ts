import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  const operator = shuffle();

  describe('Array', () => {
    it('should return an empty array', () => {
      const source: number[] = [];

      expect(operator(source)).toStrictEqual([]);
    });
  });
});
