import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  describe('Array', () => {
    it.each([
      { source: NUMBER_ARRAY, expected: 9, result: [1, 2, 3, 4, 5, 6, 7, 8] },
      { source: [], expected: undefined, result: [] },
    ])('should return last element', ({ source, expected, result }) => {
      const operator = pop();

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(result);
    });
  });

  describe('Set', () => {
    it.each([
      { source: NUMBER_SET, expected: 9, result: new Set([1, 2, 3, 4, 5, 6, 7, 8]) },
      { source: new Set(), expected: undefined, result: new Set() },
    ])('should return last element', ({ source, expected, result }) => {
      const operator = pop();

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(result);
    });
  });

  describe('Map', () => {
    it.each([
      {
        source: NUMBER_MAP,
        expected: [8, 9],
        result: new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
        ]),
      },
      { source: new Map(), expected: undefined, result: new Map() },
    ])('should return last element', ({ source, expected, result }) => {
      const operator = pop();

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual(result);
    });
  });
});
