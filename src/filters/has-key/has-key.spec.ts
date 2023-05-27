import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { hasKey } from './has-key';

describe('has-key', () => {
  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return true', () => {
      const operator = hasKey('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = hasKey('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return true', () => {
      const operator = hasKey(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = hasKey(-1);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = hasKey('a');

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(1)).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(NUMBER_ARRAY)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(new RegExp('a'))).toBeFalsy();
      expect(operator(NUMBER_SET)).toBeFalsy();
      expect(operator(anonymousFn)).toBeFalsy();
      expect(operator(anonymousArrowFn)).toBeFalsy();
    });
  });
});
