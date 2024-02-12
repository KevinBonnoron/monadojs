import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../../tests/test.data';
import { contains } from './contains';

describe('contains', () => {
  describe('string', () => {
    it('should return true', () => {
      expect(contains('abc', 'a')).toBeTruthy();
    });

    it('should return false', () => {
      expect(contains('abc', 'd')).toBeFalsy();
    });
  });

  describe('Array', () => {
    it('should return true', () => {
      expect(contains(NUMBER_ARRAY, 1)).toBeTruthy();
    });

    it('should return false', () => {
      expect(contains(NUMBER_ARRAY, 0)).toBeFalsy();
    });
  });

  describe('Set', () => {
    it('should return true', () => {
      expect(contains(NUMBER_SET, 1)).toBeTruthy();
    });

    it('should return false', () => {
      expect(contains(NUMBER_SET, 0)).toBeFalsy();
    });
  });

  describe('Map', () => {
    it('should return true', () => {
      expect(contains(NUMBER_MAP, 1)).toBeTruthy();
    });

    it('should return false', () => {
      expect(contains(NUMBER_MAP, 0)).toBeFalsy();
    });
  });
});
