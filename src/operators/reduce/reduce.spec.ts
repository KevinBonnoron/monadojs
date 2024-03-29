import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { reduce } from './reduce';

describe('reduce', () => {
  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should reduce values without initial value', () => {
      const operator = reduce((a: number, b: number) => (a > b ? b : a));

      expect(operator(source)).toEqual(1);
    });

    it('should reduce values with initial value', () => {
      const operator = reduce((a: number, b: number) => (a > b ? b : a), -1);

      expect(operator(source)).toEqual(-1);
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should reduce values without initial value', () => {
      const operator = reduce((a: number, b: number) => (a > b ? b : a));

      expect(operator(source)).toEqual(1);
    });

    it('should reduce values with initial value', () => {
      const operator = reduce((a: number, b: number) => (a > b ? b : a), -1);

      expect(operator(source)).toEqual(-1);
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should reduce values without initial value', () => {
      const operator = reduce(([a, v1]: [number, number], [b, v2]: [number, number]) => [a > b ? b : a, v1]);

      expect(operator(source)).toEqual([0, 1]);
    });

    it('should reduce values with initial value', () => {
      const operator = reduce(([a, v1]: [number, number], [b, v2]: [number, number]) => [a > b ? b : a, v1], [-1, -1]);

      expect(operator(source)).toEqual([-1, -1]);
    });
  });
});
