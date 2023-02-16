import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  describe('array', () => {
    const source = [0, 1, 2, 3];

    it('should filter', () => {
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual([2, 3]);
    });
  });

  describe('map', () => {
    const source = DEFAULT_MAP;

    it('should filter', () => {
      const keepGreaterThan =
        (threshold: string) =>
        ([, value]: string) =>
          value > threshold;
      const operator = filter(keepGreaterThan('a'));

      expect(operator(source)).toStrictEqual(
        new Map([
          [1, 'b'],
          [2, 'c'],
        ])
      );
    });
  });

  describe('set', () => {
    const source = DEFAULT_SET;

    it('should filter', () => {
      const keepGreaterThan = (threshold: number) => (value: number) => value > threshold;
      const operator = filter(keepGreaterThan(1));

      expect(operator(source)).toStrictEqual(new Set([2, 3]));
    });
  });

  describe('object', () => {
    const source = { a: 0, b: 1, c: 2, d: 3 };

    it('should filter object', () => {
      const operator = filter(() => true);
      expect(operator(source)).toStrictEqual([source]);
    });
  });
});
