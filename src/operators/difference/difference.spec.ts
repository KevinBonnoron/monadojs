import { describe, expect, it } from 'vitest';
import { difference } from './difference';

describe('difference', () => {
  describe('PlainObject', () => {
    describe('without bothWays', () => {
      const operator = difference({ a: 1 });

      it('should return no difference', () => {
        expect(operator({ a: 1 })).toStrictEqual([]);
      });

      it('should return different value', () => {
        expect(operator({ a: 2 })).toStrictEqual(['a']);
      });

      it('should return extra variable from source', () => {
        expect(operator({ b: 1 })).toStrictEqual(['b']);
      });
    });

    describe('with bothWays', () => {
      const operator = difference({ a: 1 }, { bothWays: true });

      it('should return no difference', () => {
        expect(operator({ a: 1 })).toStrictEqual([]);
      });

      it('should return different value', () => {
        expect(operator({ a: 2 })).toStrictEqual(['a']);
      });

      it('should return extra variable from source', () => {
        expect(operator({ b: 1 })).toStrictEqual(['a', 'b']);
      });
    });
  });

  describe('Array', () => {
    describe('without bothWays', () => {
      const operator = difference([1, 2, 3]);

      it('should return no difference', () => {
        expect(operator([1, 2, 3])).toStrictEqual([]);
      });

      it('should return extra variable from source', () => {
        expect(operator([1, 4])).toStrictEqual([1]);
      });
    });

    describe('with bothWays', () => {
      const operator = difference([1, 2, 3], { bothWays: true });

      it('should return no difference', () => {
        expect(operator([1, 2, 3])).toStrictEqual([]);
      });

      it('should return extra variable from source', () => {
        expect(operator([1, 4])).toStrictEqual([1, 2]);
      });
    });
  });
});
