import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, OBJECT_ARRAY, OBJECT_SET, babyDoe, janeDoe, johnDoe } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  describe('Array', () => {
    it('should filter by function', () => {
      const source = NUMBER_ARRAY;
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should filter by QueryFilterType', () => {
      const source = OBJECT_ARRAY;
      const operator = filter({ id: { $gt: 1 } });

      expect(operator(source)).toStrictEqual([johnDoe, janeDoe, babyDoe]);
    });

    it('should filter by FilterType', () => {
      const source = NUMBER_ARRAY;
      const operator = filter({ $gt: 1 });

      expect(operator(source)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Set', () => {
    it('should filter by function', () => {
      const source = NUMBER_SET;
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9]));
    });

    it('should filter by QueryFilterType', () => {
      const source = OBJECT_SET;
      const operator = filter({ id: { $gt: 1 } });

      expect(operator(source)).toStrictEqual(new Set([johnDoe, janeDoe, babyDoe]));
    });

    it('should filter by FilterType', () => {
      const source = NUMBER_SET;
      const operator = filter({ $gt: 1 });

      expect(operator(source)).toStrictEqual(new Set([2, 3, 4, 5, 6, 7, 8, 9]));
    });
  });

  describe('Map', () => {
    it('should filter by function', () => {
      const source = NUMBER_MAP;
      const keepGreaterThan = (threshold: number) => ([, value]: [number, number]) => value > threshold;
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

    // TODO
    // it('should filter by QueryFilterType', () => {
    //   const source = NUMBER_OBJECT_MAP;
    //   const operator = filter({ id: { $gt: 1 } });

    //   expect(operator(source)).toStrictEqual(new Set([johnDoe, janeDoe, babyDoe]));
    // });
  });
});
