import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { map } from './map';

describe('map', () => {
  const operator = map((value: number) => `${value}a`);

  describe('Array', () => {
    it('should map', () => {
      const source = DEFAULT_ARRAY;
      const expected = ['1a', '2a', '3a'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    it('should map', () => {
      const source = DEFAULT_SET;
      const expected = new Set(['1a', '2a', '3a']);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    it('should map', () => {
      const source = DEFAULT_MAP;
      const expected = new Map([
        [1, 'aa'],
        [2, 'ba'],
        [3, 'ca'],
      ]);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    it('should map', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      const expected = { a: '1a', b: '2a', c: '3a' };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
