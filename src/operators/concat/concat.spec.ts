import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { concat } from './concat';

describe('concat', () => {
  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should concat', () => {
      const operator = concat(4);
      expect(operator(source)).toStrictEqual([1, 2, 3, 4]);
      expect(source).toStrictEqual([1, 2, 3]);
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should concat', () => {
      const operator = concat([4, 'd']);
      expect(operator(source)).toStrictEqual(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c'],
          [4, 'd'],
        ])
      );
      expect(source).toStrictEqual(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c'],
        ])
      );
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should concat', () => {
      const operator = concat(4);
      expect(operator(source)).toStrictEqual(new Set([1, 2, 3, 4]));
      expect(source).toStrictEqual(new Set([1, 2, 3]));
    });
  });
});
