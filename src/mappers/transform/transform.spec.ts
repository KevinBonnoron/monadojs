import { describe, expect, it } from 'vitest';
import { lower } from '../lower/lower';
import { math } from '../math/math';
import { upper } from '../upper/upper';
import { transform } from './transform';

describe('transform', () => {
  describe('PlainObject', () => {
    it('should transform', () => {
      const source = { a: 'abc', b: 'DEF', c: { d: 1 } };
      const operator = transform({ a: upper(), b: lower(), c: { d: math.plus(1) } });
      const expected = { a: 'ABC', b: 'def', c: { d: 2 } };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 'abc', b: 'DEF', c: { d: 1 } });
    });
  });
});
