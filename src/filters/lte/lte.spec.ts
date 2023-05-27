import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn } from '../../../tests/test.data';
import { lte } from './lte';

describe('lte', () => {
  describe('string', () => {
    const source = 'c';

    it('should return true', () => {
      const operator = lte('c');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lte('b');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 3;

    it('should return true', () => {
      const operator = lte(3);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lte(2);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = lte(0);

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(NUMBER_ARRAY)).toBeFalsy();
      expect(operator(NUMBER_SET)).toBeFalsy();
      expect(operator(NUMBER_MAP)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
    });
  });
});
