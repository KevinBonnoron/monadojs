import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { keys } from './keys';

describe('keys', () => {
  describe('Array', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = NUMBER_ARRAY;
      expect([...operator(source)]).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Set', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = NUMBER_SET;
      expect([...operator(source)]).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Map', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = NUMBER_MAP;
      expect([...operator(source)]).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('PlainObject', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      expect([...operator(source)]).toStrictEqual(['a', 'b', 'c']);
    });
  });
});
