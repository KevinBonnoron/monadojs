import { describe, expect, it } from 'vitest';
import { nth } from './nth';

describe('nth', () => {
  describe('string', () => {
    it('should return the min', () => {
      const source = ['a', 'c', 'b'];
      expect(source.reduce(nth(1))).toStrictEqual('c');
      expect(source.reduce(nth(-1))).toStrictEqual('b');
      expect(source.reduce(nth(-2))).toStrictEqual('c');
    });
  });

  describe('number', () => {
    it('should return the nth element', () => {
      const source = [1, 3, 2];
      expect(source.reduce(nth(1))).toStrictEqual(3);
      expect(source.reduce(nth(-1))).toStrictEqual(2);
      expect(source.reduce(nth(-2))).toStrictEqual(3);
    });
  });
});
