import { describe, expect, it } from 'vitest';
import { EMPTY_ARRAY, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { nil } from './nil';

describe('nil', () => {
  const operator = nil();

  describe('null', () => {
    it('should return true', () => {
      expect(operator(null)).toBeTruthy();
    });
  });

  describe('undefined', () => {
    it('should return true', () => {
      expect(operator(undefined)).toBeTruthy();
    });
  });

  describe('nil', () => {
    it('should return true', () => {
      expect(operator(undefined)).toBeTruthy();
    });
  });

  describe('others', () => {
    it('should return false', () => {
      expect([null, undefined, 1, 'a', true, EMPTY_ARRAY, anonymousArrowFn, anonymousFn].filter(operator)).toStrictEqual([null, undefined]);

      expect(operator(1)).toBeFalsy();
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(EMPTY_ARRAY)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator([null, undefined, 1, 'a', true, EMPTY_ARRAY, anonymousArrowFn, anonymousFn])).toBeFalsy();
    });
  });
});
