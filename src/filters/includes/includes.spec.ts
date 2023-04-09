import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
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
    const source = DEFAULT_ARRAY;

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
    const source = DEFAULT_MAP;

    it('should return true', () => {
      const operator = includes('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = includes(4);
      expect(operator(source)).toBeFalsy();
    });
  });
});
