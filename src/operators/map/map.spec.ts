import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, OBJECT_ARRAY, OBJECT_SET } from '../../../tests/test.data';
import { string } from '../../wrappers';
import { map } from './map';

describe('map', () => {
  describe('Array', () => {
    it('should map by function', () => {
      const source = NUMBER_ARRAY;
      const operator = map((value) => `${value}a`);
      const expected = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should map by ObjectMapperType', () => {
      const source = OBJECT_ARRAY;
      const operator = map({ name: string.toLowerCase() });
      const expected = [{ name: 'foo bar' }, { name: 'john doe' }, { name: 'jane doe' }, { name: 'baby doe' }];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should map by PropertyKey', () => {
      const source = OBJECT_ARRAY;
      const operator = map('name');
      const expected = ['Foo Bar', 'John Doe', 'Jane Doe', 'Baby Doe'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    it('should map', () => {
      const source = NUMBER_SET;
      const operator = map((value: number) => `${value}a`);
      const expected = new Set(['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a']);

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should map by ObjectMapperType', () => {
      const source = OBJECT_SET;
      const operator = map({ name: string.toLowerCase() });
      const expected = new Set([{ name: 'foo bar' }, { name: 'john doe' }, { name: 'jane doe' }, { name: 'baby doe' }]);

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should map by PropertyKey', () => {
      const source = OBJECT_SET;
      const operator = map('name');
      const expected = new Set(['Foo Bar', 'John Doe', 'Jane Doe', 'Baby Doe']);

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    it('should map', () => {
      const source = NUMBER_MAP;
      const operator = map((value: number) => `${value}a`);
      const expected = new Map([
        [0, '1a'],
        [1, '2a'],
        [2, '3a'],
        [3, '4a'],
        [4, '5a'],
        [5, '6a'],
        [6, '7a'],
        [7, '8a'],
        [8, '9a']
      ]);

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
