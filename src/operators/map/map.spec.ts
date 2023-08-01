import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { map } from './map';

describe('map', () => {
  const operator = map((value: number) => `${value}a`);

  describe('Array', () => {
    it('should map', () => {
      const source = NUMBER_ARRAY;
      const expected = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    it('should map', () => {
      const source = NUMBER_SET;
      const expected = new Set(['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a']);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    it('should map', () => {
      const source = NUMBER_MAP;
      const expected = new Map([
        [0, '1a'],
        [1, '2a'],
        [2, '3a'],
        [3, '4a'],
        [4, '5a'],
        [5, '6a'],
        [6, '7a'],
        [7, '8a'],
        [8, '9a']
      ]);

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
