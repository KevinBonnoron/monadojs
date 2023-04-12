import { describe, expect, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { iin } from './iin';

describe('iin', () => {
  describe('string', () => {
    const operator = iin('abc');

    it('should return true', () => {
      const source = 'a';
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = 'd';
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = 1;

    it('should return true', () => {
      const operator = iin(NUMBER_ARRAY);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = iin([4, 5, 6]);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const operator = iin(NUMBER_SET);

    it('should return true', () => {
      const source = 1;
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = 10;
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const operator = iin(NUMBER_MAP);

    it('should return true', () => {
      const source = 1;
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = 10;
      expect(operator(source)).toBeFalsy();
    });
  });
});
