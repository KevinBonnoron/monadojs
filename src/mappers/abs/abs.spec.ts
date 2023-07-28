import { describe, expect, it } from 'vitest';
import { abs } from './abs';

describe('abs', () => {
  const operator = abs();

  describe('number', () => {
    it('should return absolute value', () => {
      expect([-10].map(operator)).toStrictEqual([10]);
      expect([-10, 20].map(operator)).toStrictEqual([10, 20]);
      expect(operator(-10)).toStrictEqual(10);
    });
  });
});
