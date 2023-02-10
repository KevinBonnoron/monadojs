import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  describe('array', () => {
    it('should filter', () => {
      const source = [0, 1, 2, 3];
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;

      expect(filter(keepGreaterThan(1))(source)).toStrictEqual([2, 3]);
    });
  });

  describe('map', () => {
    it('should filter', () => {
      const source = DEFAULT_MAP;
      const keepGreaterThan =
        (threshold: string) =>
        ([, value]: string) =>
          value > threshold;

      expect(filter(keepGreaterThan('a'))(source)).toStrictEqual(
        new Map([
          [1, 'b'],
          [2, 'c'],
        ])
      );
    });
  });

  describe('set', () => {
    it('should filter', () => {
      const source = DEFAULT_SET;
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;

      expect(filter(keepGreaterThan(1))(source)).toStrictEqual(new Set([2, 3]));
    });
  });

  describe('object', () => {
    it('should filter object', () => {
      const source = { a: 0, b: 1, c: 2, d: 3 };
      expect(filter(() => true)(source)).toStrictEqual([source]);
    });
  });
});
