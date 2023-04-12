import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { lt } from './lt';

describe('lt', () => {
  describe('string', () => {
    const source = 'c';

    it('should return true', () => {
      const operator = lt('d');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lt('c');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 3;

    it('should return true', () => {
      const operator = lt(4);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lt(3);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = lt(0);

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(NUMBER_ARRAY)).toBeFalsy();
      expect(operator(NUMBER_SET)).toBeFalsy();
      expect(operator(NUMBER_MAP)).toBeFalsy();
      expect(operator(() => {})).toBeFalsy();
    });
  });
});
