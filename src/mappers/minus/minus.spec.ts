import { describe, expect, it } from 'vitest';
import { minus } from './minus';

describe('minus', () => {
  describe('number', () => {
    it('should substract values', () => {
      expect([1].map(minus())).toStrictEqual([0]);
      expect([1, 2].map(minus(1))).toStrictEqual([0, 1]);
      expect(minus()(1)).toStrictEqual(0);
      expect(minus(1)(1)).toStrictEqual(0);
    });
  });
});
