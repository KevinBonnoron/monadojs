import { describe, expect, it } from 'vitest';
import { freeze } from './freeze';

describe('freeze', () => {
  describe('PlainObject', () => {
    it('should deep freeze', () => {
      const source = { a: 1, b: { c: 2 } };
      const operator = freeze();
      const result = operator(source);

      expect(Object.isFrozen(source)).toBeFalsy();
      expect(Object.isFrozen(result)).toBeTruthy();
      expect(() => {
        source.a = 2;
      }).not.toThrowError();
    });

    it('should not deep freeze', () => {
      const source = { a: 1, b: { c: 2 } };
      const operator = freeze(false);
      const result = operator(source);

      expect(Object.isFrozen(source)).toBeFalsy();
      expect(Object.isFrozen(result)).toBeTruthy();
      expect(() => {
        result.b.c = 3;
      }).not.toThrowError();
      expect(() => {
        source.a = 2;
      }).not.toThrowError();
    });
  });
});
