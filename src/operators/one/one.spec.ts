import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { one } from './one';

describe('one', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      expect(one(eq(1))(source)).toBeTruthy();
      expect(one(1)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(eq(10))(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      expect(one(eq(1))(source)).toBeTruthy();
      expect(one(1)(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(eq(10))(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;
    const valueEq =
      (expected: any) => ([_, value]: [key: any, value: any]) => value === expected;

    it('should return true', () => {
      expect(one(valueEq(1))(source)).toBeTruthy();
      expect(one([0, 1])(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(one(valueEq([9, 10]))(source)).toBeFalsy();
    });
  });
});
