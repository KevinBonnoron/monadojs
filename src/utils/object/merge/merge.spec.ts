import { describe, expect, it } from 'vitest';
import { merge } from './merge';

describe('merge', () => {
  describe('Array', () => {
    it('should merge values', () => {
      const o1 = [1];
      const o2 = [2, 3];

      expect(merge(o1, o2)).toEqual([1, 2, 3]);
      expect(o1).toStrictEqual([1]);
      expect(o2).toStrictEqual([2, 3]);
    });

    it('should throw error when mergin array with object', () => {
      const o1 = [1];
      const o2 = {};

      expect(() => merge(o1, o2)).toThrowError(`Can't merge array with object`);
    });

    it('should throw error when mergin object with array', () => {
      const o1 = {};
      const o2 = [1];

      expect(() => merge(o1, o2)).toThrowError(`Can't merge object with array`);
    });
  });

  describe('PlainObject', () => {
    it('should merge values', () => {
      const o1 = { a: 1 };
      const o2 = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const result = merge(o1, o2);

      expect(result).toEqual({ a: 1, b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(o1).toStrictEqual({ a: 1 });
      expect(o2).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    });

    it('should merge values with overriding keys', () => {
      const o1 = { b: 1 };
      const o2 = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const result = merge(o1, o2);

      expect(result).toEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(o1).toStrictEqual({ b: 1 });
      expect(o2).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    });

    it('should merge values when adding array property', () => {
      const o1 = { e: [{ g: 5 }] };
      const o2 = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const result = merge(o1, o2);

      expect(result).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
      expect(o1).toStrictEqual({ e: [{ g: 5 }] });
      expect(o2).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
    });

    it('should merge multiple values', () => {
      const o1 = { e: [{ g: 5 }] };
      const o2 = { e: [{ f: 4 }] };
      const result = merge(o1, o2);

      expect(result).toEqual({ e: [{ g: 5 }, { f: 4 }] });
      expect(o1).toStrictEqual({ e: [{ g: 5 }] });
      expect(o2).toStrictEqual({ e: [{ f: 4 }] });
    });
  });
});
