import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { indexOf } from './index-of';

describe('index-of', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe(0);
      expect(indexOf(9)(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(indexOf(0)(source)).toBe(-1);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe(0);
      expect(indexOf(9)(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(indexOf(0)(source)).toBe(-1);
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe(0);
      expect(indexOf(9)(source)).toBe(8);
    });

    it('should return -1', () => {
      expect(indexOf(0)(source)).toBe(-1);
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe('a');
      expect(indexOf(3)(source)).toBe('c');
    });

    it('should return -1', () => {
      expect(indexOf(4)(source)).toBe(-1);
    });
  });
});
