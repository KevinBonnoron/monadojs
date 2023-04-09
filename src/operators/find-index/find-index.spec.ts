import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { eq } from '../../filters';
import { findIndex } from './find-index';

describe('findIndex', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe(0);
      expect(findIndex(eq(2))(source)).toBe(1);
      expect(findIndex(eq(3))(source)).toBe(2);
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe(0);
      expect(findIndex(eq(2))(source)).toBe(1);
      expect(findIndex(eq(3))(source)).toBe(2);
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should return index', () => {
      expect(findIndex(eq('a'))(source)).toBe(1);
      expect(findIndex(eq('b'))(source)).toBe(2);
      expect(findIndex(eq('c'))(source)).toBe(3);
    });

    it('should return -1', () => {
      expect(findIndex(eq('d'))(source)).toBe(-1);
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return index', () => {
      expect(findIndex(eq(1))(source)).toBe('a');
      expect(findIndex(eq(2))(source)).toBe('b');
      expect(findIndex(eq(3))(source)).toBe('c');
    });

    it('should return -1', () => {
      expect(findIndex(eq(0))(source)).toBe(-1);
    });
  });
});
