import { describe, expect, it } from 'vitest';
import { set } from './set';

describe('set', () => {
  describe('PlainObject', () => {
    const source = { a: 1, b: { c: [{ d: 2 }] } };

    it('should change property', () => {
      const operator = set('a', 2);
      operator(source);
      expect(source).toStrictEqual({ a: 2, b: { c: [{ d: 2 }] } })
    });
  });
});
