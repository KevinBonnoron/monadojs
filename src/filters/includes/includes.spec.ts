import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { includes } from './includes';

describe('includes', () => {
  describe('string', () => {
    const source = 'abc';

    it('should return true', () => {
      const operator = includes('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes(0);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes(0);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes(0);
      expect(operator(source)).toBeFalsy();
    });
  });
});
