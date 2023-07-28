import { describe, expect, it } from 'vitest';
import { floor } from './floor';

describe('floor', () => {
  const operator = floor();

  describe('number', () => {
    it('should floor values', () => {
      expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(operator)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect([-0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9].map(operator)).toStrictEqual([-0, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
      expect(operator(0.0)).toEqual(0);
    });
  });
});
