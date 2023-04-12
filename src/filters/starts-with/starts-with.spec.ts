import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { startsWith } from './starts-with';

describe('starts-with', () => {
  describe('string', () => {
    const operator = startsWith('a');

    it('should return true', () => {
      const source = 'abc';
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = 'cba';
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = startsWith('a');

    it('should return false', () => {
      expect(operator(0)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(NUMBER_ARRAY)).toBeFalsy();
      expect(operator(NUMBER_SET)).toBeFalsy();
      expect(operator(NUMBER_MAP)).toBeFalsy();
      expect(operator(new RegExp('a'))).toBeFalsy();
      expect(operator(() => {})).toBeFalsy();
    });
  });
});
