import { describe, expect, it } from 'vitest';
import { difference } from './difference';

describe('difference', () => {
  describe('without bothWays', () => {
    describe('PlainObject', () => {
      const operator = difference({ a: 1 });
  
      it('should return no difference', () => {
        expect(operator({ a: 1 })).toStrictEqual([]);
      });
  
      it('should return extra variable from source', () => {
        expect(operator({ b: 1 })).toStrictEqual(['b']);
      });
    });
  });

  describe('with bothWays', () => {
    describe('PlainObject', () => {
      const operator = difference({ a: 1 }, { bothWays: true });
  
      it('should return no difference', () => {
        expect(operator({ a: 1 })).toStrictEqual([]);
      });
  
      it('should return extra variable from source', () => {
        expect(operator({ b: 1 })).toStrictEqual(['a', 'b']);
      });
    });
  });
});