import { describe, expect, it } from 'vitest';
import { haveSameType } from './have-same-type';

describe('haveSameType', () => {
  describe('Array', () => {
    it('should return true', () => {
      expect(haveSameType([0, 'a'], [0, 'a'])).toBeTruthy();
      expect(haveSameType([0, 'a'], [1, 'b'])).toBeTruthy();
    });

    it('should return false', () => {
      expect(haveSameType([0, 'a'], ['a', 0])).toBeFalsy();
      expect(haveSameType([['a'], ['b']], [1, 2])).toBeFalsy();
    });
  });
});
