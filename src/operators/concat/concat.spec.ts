import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { concat } from './concat';

describe('concat', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should concat', () => {
      const operator = concat(4);
      expect(operator(source)).toStrictEqual([1, 2, 3, 4]);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should concat', () => {
      const operator = concat([3, 'd']);
      expect(operator(source)).toStrictEqual(
        new Map([
          [0, 'a'],
          [1, 'b'],
          [2, 'c'],
          [3, 'd'],
        ])
      );
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should concat', () => {
      const operator = concat(4);
      expect(operator(source)).toStrictEqual(new Set([1, 2, 3, 4]));
    });
  });
});
