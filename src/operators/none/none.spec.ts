import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { none } from './none';

describe('none', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return true', () => {
      expect(none(eq(0))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(eq(1))(source)).toBeFalsy();
      expect(none(1)(source)).toBeFalsy();
      expect(none(eq(2))(source)).toBeFalsy();
      expect(none(2)(source)).toBeFalsy();
      expect(none(eq(3))(source)).toBeFalsy();
      expect(none(3)(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      expect(none(eq(0))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(eq(1))(source)).toBeFalsy();
      expect(none(1)(source)).toBeFalsy();
      expect(none(eq(2))(source)).toBeFalsy();
      expect(none(2)(source)).toBeFalsy();
      expect(none(eq(3))(source)).toBeFalsy();
      expect(none(3)(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(none(valueEq('d'))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(valueEq('a'))(source)).toBeFalsy();
      expect(none([1, 'a'])(source)).toBeFalsy();
      expect(none(valueEq('b'))(source)).toBeFalsy();
      expect(none([2, 'b'])(source)).toBeFalsy();
      expect(none(valueEq('c'))(source)).toBeFalsy();
      expect(none([3, 'c'])(source)).toBeFalsy();
    });
  });
});
