import { describe, expect, it } from 'vitest';
import { NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  describe('Array', () => {
    const source = [0, 1, 2, 3];

    it('should filter', () => {
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual([2, 3]);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should filter', () => {
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9]));
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should filter', () => {
      const keepGreaterThan =
        (threshold: number) =>
        ([, value]: [number, number]) =>
          value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual(
        new Map([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9]
        ])
      );
    });
  });

  describe('PlainObject', () => {
    const source = { a: 0, b: 1, c: 2, d: 3 };

    it('should filter object', () => {
      const operator = filter(() => true);
      expect(operator(source)).toStrictEqual([source]);
    });
  });
});
