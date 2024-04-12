import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_REGEX, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn } from '../../../tests/test.data';
import { like } from './like';

describe('like', () => {
  describe.each([{ operator: like(/[a-z]/) }, { operator: like('a') }])('string', ({ operator }) => {
    it('should return true', () => {
      const source = 'abc';
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = '123';
      expect(operator(source)).toBeFalsy();
    });
  });

  describe.each([{ operator: like(/[a-z]/) }, { operator: like('a') }])('others', ({ operator }) => {
    it('should return false', () => {
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(NUMBER_ARRAY)).toBeFalsy();
      expect(operator(NUMBER_SET)).toBeFalsy();
      expect(operator(NUMBER_MAP)).toBeFalsy();
      expect(operator(DEFAULT_REGEX)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
    });
  });
});
