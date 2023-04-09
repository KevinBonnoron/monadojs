import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { some } from './some';

describe('some', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return true', () => {
      expect(some(eq(1))(source)).toBeTruthy();
      expect(some(1)(source)).toBeTruthy();
      expect(some(eq(2))(source)).toBeTruthy();
      expect(some(2)(source)).toBeTruthy();
      expect(some(eq(3))(source)).toBeTruthy();
      expect(some(3)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      expect(some(eq(1))(source)).toBeTruthy();
      expect(some(1)(source)).toBeTruthy();
      expect(some(eq(2))(source)).toBeTruthy();
      expect(some(2)(source)).toBeTruthy();
      expect(some(eq(3))(source)).toBeTruthy();
      expect(some(3)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(some(valueEq('a'))(source)).toBeTruthy();
      expect(some([1, 'a'])(source)).toBeTruthy();
      expect(some(valueEq('b'))(source)).toBeTruthy();
      expect(some([2, 'b'])(source)).toBeTruthy();
      expect(some(valueEq('c'))(source)).toBeTruthy();
      expect(some([3, 'c'])(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(valueEq([4, 'd']))(source)).toBeFalsy();
    });
  });
});
