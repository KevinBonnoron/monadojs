import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { some } from './some';

describe('some', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      expect(some(eq(1))(source)).toBeTruthy();
      expect(some(1)(source)).toBeTruthy();
      expect(some(eq(9))(source)).toBeTruthy();
      expect(some(9)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      expect(some(eq(1))(source)).toBeTruthy();
      expect(some(1)(source)).toBeTruthy();
      expect(some(eq(9))(source)).toBeTruthy();
      expect(some(9)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(eq(0))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;
    const valueEq =
      (expected: any) =>
      ([_, value]: [key: any, value: any]) =>
        value === expected;

    it('should return true', () => {
      expect(some(valueEq(1))(source)).toBeTruthy();
      expect(some([0, 1])(source)).toBeTruthy();
      expect(some(valueEq(9))(source)).toBeTruthy();
      expect(some([8, 9])(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(some(valueEq([4, 'd']))(source)).toBeFalsy();
    });
  });
});
