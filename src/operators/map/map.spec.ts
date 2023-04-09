import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { map } from './map';

describe('map', () => {
  describe('Array', () => {
    const plusOne = (value: number) => value + 1;
    const operator = map(plusOne);

    it('should map', () => {
      const source = DEFAULT_ARRAY;
      const expected = [2, 3, 4];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const plusOne = (value: number) => value + 1;
    const operator = map(plusOne);

    it('should map', () => {
      const source = DEFAULT_SET;
      const expected = new Set([2, 3, 4]);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const plusOne = ([key, value]: [key: number, value: string]) => [key + 1, value];
    const operator = map(plusOne);

    it('should map', () => {
      const source = DEFAULT_MAP;
      const expected = new Map([
        [2, 'a'],
        [3, 'b'],
        [4, 'c'],
      ]);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    const plusOne = (value: number) => value + 1;
    const operator = map(plusOne);

    it('should map', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      const expected = { a: 2, b: 3, c: 4 };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
