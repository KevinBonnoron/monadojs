import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { find } from './find';

describe('find', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return true', () => {
      expect(find(eq(1))(source)).toBeTruthy();
      expect(find(eq(2))(source)).toBeTruthy();
      expect(find(eq(3))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      expect(find(eq(1))(source)).toBeTruthy();
      expect(find(eq(2))(source)).toBeTruthy();
      expect(find(eq(3))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(find(valueEq('a'))(source)).toBeTruthy();
      expect(find(valueEq('b'))(source)).toBeTruthy();
      expect(find(valueEq('c'))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(valueEq('d'))(source)).toBeFalsy();
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;
    const keyEq =
      (expected: any) =>
      ([key]: [key: any]) =>
        key === expected;

    it('should return true', () => {
      expect(find(keyEq('a'))(source)).toBeTruthy();
      expect(find(keyEq('b'))(source)).toBeTruthy();
      expect(find(keyEq('c'))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(keyEq('d'))(source)).toBeFalsy();
    });
  });
});
