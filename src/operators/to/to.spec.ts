import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { to } from './to';

describe('to', () => {
  describe('Array', () => {
    const operator = to(Array);

    it('should keep array', () => {
      const source = NUMBER_ARRAY;

      expect(operator(source)).toStrictEqual(source);
    });

    it('should convert set', () => {
      const source = NUMBER_SET;

      expect(operator(source)).toStrictEqual([...NUMBER_SET]);
    });

    it('should convert map', () => {
      const source = NUMBER_MAP;

      expect(operator(source)).toStrictEqual([...NUMBER_MAP]);
    });
  });

  describe('Set', () => {
    const operator = to(Set);

    it('should convert array', () => {
      const source = NUMBER_ARRAY;

      expect(operator(source)).toStrictEqual(new Set([...NUMBER_ARRAY]));
    });

    it('should keep set', () => {
      const source = NUMBER_SET;

      expect(operator(source)).toStrictEqual(source);
    });

    it('should convert map', () => {
      const source = NUMBER_MAP;

      expect(operator(source)).toStrictEqual(new Set([...NUMBER_MAP]));
    });
  });

  describe('Map', () => {
    const operator = to(Map, (value) => `${value}`);

    it('should convert array', () => {
      const source = NUMBER_ARRAY;

      expect(operator(source)).toStrictEqual(
        new Map([
          ['1', 1],
          ['2', 2],
          ['3', 3],
          ['4', 4],
          ['5', 5],
          ['6', 6],
          ['7', 7],
          ['8', 8],
          ['9', 9],
        ]),
      );
    });

    it('should convert set', () => {
      const source = NUMBER_SET;

      expect(operator(source)).toStrictEqual(
        new Map([
          ['1', 1],
          ['2', 2],
          ['3', 3],
          ['4', 4],
          ['5', 5],
          ['6', 6],
          ['7', 7],
          ['8', 8],
          ['9', 9],
        ]),
      );
    });

    it('should keep map', () => {
      const source = NUMBER_MAP;

      expect(operator(source)).toStrictEqual(source);
    });
  });
});
