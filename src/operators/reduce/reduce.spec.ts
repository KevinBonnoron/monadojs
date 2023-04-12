import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { reduce } from './reduce';

describe('reduce', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

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
    const source = DEFAULT_SET;

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
    const source = DEFAULT_MAP;

    it('should reduce values without initial value', () => {
      const operator = reduce(([a, v1]: [number, string], [b, v2]: [number, string]) => [a > b ? b : a, v1]);

      expect(operator(source)).toEqual([1, 'a']);
    });

    it('should reduce values with initial value', () => {
      const operator = reduce(([a, v1]: [number, string], [b, v2]: [number, string]) => [a > b ? b : a, v1], [-1, '']);

      expect(operator(source)).toEqual([-1, '']);
    });
  });
});
