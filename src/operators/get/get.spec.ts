import { describe, expect, it } from 'vitest';
import { NUMBER_MAP } from '../../../tests/test.data';
import { get } from './get';

describe('get', () => {
  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return the value if key is found', () => {
      const operator = get('0');
      expect(operator(source)).toStrictEqual(1);
    });

    it('should return defaultValue if key is not found', () => {
      const operator = get('10', 10);
      expect(operator(source)).toStrictEqual(10);
    });
  });

  describe('PlainObject', () => {
    const source = { a: 1, b: { c: [{ d: 2 }] } };

    it('should return the value if key is found', () => {
      const operator = get('a');
      expect(operator(source)).toStrictEqual(1);
    });

    it('should return defaultValue if key is not found', () => {
      const operator = get('0', 30);
      expect(operator(source)).toStrictEqual(30);
    });

    it('should return the deep value if key is found', () => {
      const operator = get('b.c[0].d');
      expect(operator(source)).toStrictEqual(2);
    });
  });
});
