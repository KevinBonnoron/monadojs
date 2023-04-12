import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { gte } from './gte';

describe('gte', () => {
  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = gte(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gte(4);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = gte('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gte('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = gte(0);

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
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
