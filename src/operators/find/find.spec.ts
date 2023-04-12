import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { find } from './find';

describe('find', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      expect(find(eq(1))(source)).toBeTruthy();
      expect(find(eq(2))(source)).toBeTruthy();
      expect(find(eq(3))(source)).toBeTruthy();
      expect(find(eq(4))(source)).toBeTruthy();
      expect(find(eq(5))(source)).toBeTruthy();
      expect(find(eq(6))(source)).toBeTruthy();
      expect(find(eq(7))(source)).toBeTruthy();
      expect(find(eq(8))(source)).toBeTruthy();
      expect(find(eq(9))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      expect(find(eq(1))(source)).toBeTruthy();
      expect(find(eq(2))(source)).toBeTruthy();
      expect(find(eq(3))(source)).toBeTruthy();
      expect(find(eq(4))(source)).toBeTruthy();
      expect(find(eq(5))(source)).toBeTruthy();
      expect(find(eq(6))(source)).toBeTruthy();
      expect(find(eq(7))(source)).toBeTruthy();
      expect(find(eq(8))(source)).toBeTruthy();
      expect(find(eq(9))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(find(valueEq(1))(source)).toBeTruthy();
      expect(find(valueEq(2))(source)).toBeTruthy();
      expect(find(valueEq(3))(source)).toBeTruthy();
      expect(find(valueEq(4))(source)).toBeTruthy();
      expect(find(valueEq(5))(source)).toBeTruthy();
      expect(find(valueEq(6))(source)).toBeTruthy();
      expect(find(valueEq(7))(source)).toBeTruthy();
      expect(find(valueEq(8))(source)).toBeTruthy();
      expect(find(valueEq(9))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(find(valueEq(0))(source)).toBeFalsy();
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
