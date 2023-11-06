import { describe, expect, it } from 'vitest';
import { number } from '../../wrappers/number/number';
import { string } from '../../wrappers/string/string';
import { transform } from './transform';

describe('transform', () => {
  describe('PlainObject', () => {
    it('should transform', () => {
      const source = { a: 'abc', b: 'DEF', c: { d: 1 } };
      const operator = transform({ a: string.toUpperCase(), b: string.toLowerCase(), c: { d: number.plus(1) } });
      const expected = { a: 'ABC', b: 'def', c: { d: 2 } };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 'abc', b: 'DEF', c: { d: 1 } });
    });
  });
});
