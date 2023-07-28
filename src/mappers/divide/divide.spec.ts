import { describe, expect, it } from 'vitest';
import { divide } from './divide';

describe('divide', () => {
  describe('number', () => {
    it('should divide values', () => {
      expect(divide()(1)).toStrictEqual(1);
      expect(divide(1)(1)).toStrictEqual(1);
      expect([1, 2].map(divide(1))).toStrictEqual([1, 2]);
    });
  });
});
