import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
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
      const operator = iin(DEFAULT_ARRAY);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = iin([4, 5, 6]);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const operator = iin(DEFAULT_MAP);

    it('should return true', () => {
      const source = 'a';
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = 'd';
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = 1;

    it('should return true', () => {
      const operator = iin(DEFAULT_SET);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = iin(new Set([4, 5, 6]));
      expect(operator(source)).toBeFalsy();
    });
  });
});
