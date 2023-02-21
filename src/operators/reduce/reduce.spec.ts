import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { reduce } from './reduce';

describe('reduce', () => {
  describe('Array', () => {
    it('reduce values', () => {
      const minReducer = (a: number, b: number) => (a > b ? b : a);
      const source = [1, 2, 3];

      expect(reduce(minReducer)(source)).toEqual(1);
      expect(reduce(minReducer, -1)(source)).toEqual(-1);
    });
  });

  describe('Map', () => {
    it('reduce values', () => {
      const minReducer = ([a]: [number], [b]: [number]) => [a > b ? b : a] as [number];
      const source = DEFAULT_MAP;

      expect(reduce(minReducer)(source)).toEqual([0]);
      expect(reduce(minReducer, [-1])(source)).toEqual([-1]);
    });
  });

  describe('Set', () => {
    it('reduce values', () => {
      const minReducer = (a: number, b: number) => (a > b ? b : a);
      const source = DEFAULT_SET;

      expect(reduce(minReducer)(source)).toEqual(1);
      expect(reduce(minReducer, -1)(source)).toEqual(-1);
    });
  });

  describe('number', () => {
    it('reduce values', () => {
      const minReducer = (a: number, b: number) => (a > b ? b : a);

      expect(reduce(minReducer)(0)).toEqual(0);
      expect(reduce(minReducer, -1)(0)).toEqual(-1);
    });
  });
});
