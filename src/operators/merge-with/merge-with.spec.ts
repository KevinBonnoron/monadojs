import { describe, expect, it } from 'vitest';
import { mergeWith } from './merge-with';

describe('mergeWith', () => {
  describe('Array', () => {
    it('should merge values', () => {
      const source = [1];
      const sources = [2, 3];
      const operator = mergeWith(sources);

      expect(operator(source)).toEqual([1, 2, 3]);
      expect(sources).toStrictEqual([2, 3]);
      expect(source).toStrictEqual([1]);
    });
  });

  describe('PlainObject', () => {
    it('should merge values', () => {
      const source = { a: 1 };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = mergeWith(sources);

      expect(operator(source)).toEqual({ a: 1, b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ a: 1 });
    });

    it('should merge values with overriding keys', () => {
      const source = { b: 1 };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = mergeWith(sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ b: 1 });
    });

    it('should merge values when adding array property', () => {
      const source = { e: [{ g: 5 }] };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = mergeWith(sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ e: [{ g: 5 }] });
    });

    it('should merge multiple values', () => {
      const source = { e: [{ g: 5 }] };
      const sources = [{ b: 2 }, { c: { d: 3 } }, { e: [{ f: 4 }] }];
      const operator = mergeWith(...sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
      expect(sources).toStrictEqual([{ b: 2 }, { c: { d: 3 } }, { e: [{ f: 4 }] }]);
      expect(source).toStrictEqual({ e: [{ g: 5 }] });
    });
  });
});
