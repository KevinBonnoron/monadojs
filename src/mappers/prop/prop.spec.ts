import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT } from '../../../tests/test.data';
import { prop } from './prop';

describe('prop', () => {
  describe('PlainObject', () => {
    const operator = prop('a', 4);

    it('should return property', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      const expected = 1;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });

    it('should return defaultValue', () => {
      const source = { a: undefined, b: 2, c: 3 };
      const expected = 4;

      expect(operator(source)).toStrictEqual(expected);
      expect([source].map(operator)).toStrictEqual([expected]);
    });
  });
});
