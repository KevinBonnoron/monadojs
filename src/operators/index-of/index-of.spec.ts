import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { indexOf } from './index-of';

describe('index-of', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe(0);
      expect(indexOf(2)(source)).toBe(1);
      expect(indexOf(3)(source)).toBe(2);
    });

    it('should return -1', () => {
      expect(indexOf(0)(source)).toBe(-1);
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe(0);
      expect(indexOf(2)(source)).toBe(1);
      expect(indexOf(3)(source)).toBe(2);
    });

    it('should return -1', () => {
      expect(indexOf(0)(source)).toBe(-1);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should return index', () => {
      expect(indexOf('a')(source)).toBe(1);
      expect(indexOf('b')(source)).toBe(2);
      expect(indexOf('c')(source)).toBe(3);
    });

    it('should return -1', () => {
      expect(indexOf('d')(source)).toBe(-1);
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return index', () => {
      expect(indexOf(1)(source)).toBe('a');
      expect(indexOf(2)(source)).toBe('b');
      expect(indexOf(3)(source)).toBe('c');
    });

    it('should return -1', () => {
      expect(indexOf(4)(source)).toBe(-1);
    });
  });
});
