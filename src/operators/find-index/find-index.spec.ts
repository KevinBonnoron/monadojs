import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { findIndex } from './find-index';

describe('findIndex', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe(0);
      expect(findIndex(eq(9))(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe(0);
      expect(findIndex(eq(9))(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe(0);
      expect(findIndex(eq(9))(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe('a');
      expect(findIndex(eq(3))(source)).toBe('c');
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });
});
