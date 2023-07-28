import { describe, expect, it } from 'vitest';
import { plus } from './plus';

describe('plus', () => {
  describe('number', () => {
    it('should add values', () => {
      expect([1].map(plus())).toStrictEqual([2]);
      expect([1, 2].map(plus(1))).toStrictEqual([2, 3]);
      expect(plus()(1)).toStrictEqual(2);
      expect(plus(1)(1)).toStrictEqual(2);
    });
  });
});
