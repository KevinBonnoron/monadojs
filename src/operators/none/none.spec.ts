import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { none } from './none';

describe('none', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      expect(none(eq(10))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(eq(1))(source)).toBeFalsy();
      expect(none(1)(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      expect(none(eq(10))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(eq(1))(source)).toBeFalsy();
      expect(none(1)(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;
    const valueEq =
      (expected: unknown) => ([, value]: [key: unknown, value: unknown]) => value === expected;

    it('should return true', () => {
      expect(none(valueEq(10))(source)).toBeTruthy();
    });

    it('should return false', () => {
      expect(none(valueEq(1))(source)).toBeFalsy();
      expect(none([0, 1])(source)).toBeFalsy();
    });
  });
});
