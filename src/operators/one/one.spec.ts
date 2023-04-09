import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { one } from './one';

describe('one', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return true', () => {
      expect(one(eq(1))(source)).toBeTruthy();
      expect(one(1)(source)).toBeTruthy();
      expect(one(eq(2))(source)).toBeTruthy();
      expect(one(2)(source)).toBeTruthy();
      expect(one(eq(3))(source)).toBeTruthy();
      expect(one(3)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      expect(one(eq(1))(source)).toBeTruthy();
      expect(one(1)(source)).toBeTruthy();
      expect(one(eq(2))(source)).toBeTruthy();
      expect(one(2)(source)).toBeTruthy();
      expect(one(eq(3))(source)).toBeTruthy();
      expect(one(3)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(one(valueEq('a'))(source)).toBeTruthy();
      expect(one([1, 'a'])(source)).toBeTruthy();
      expect(one(valueEq('b'))(source)).toBeTruthy();
      expect(one([2, 'b'])(source)).toBeTruthy();
      expect(one(valueEq('c'))(source)).toBeTruthy();
      expect(one([3, 'c'])(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(valueEq([4, 'd']))(source)).toBeFalsy();
    });
  });
});
