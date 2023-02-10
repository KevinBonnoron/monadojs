import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { includes } from './includes';

describe('includes', () => {
  describe('array', () => {
    const source = [1, 2, 3];

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = includes(0);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('map', () => {
    const source = DEFAULT_MAP;

    it('should return true', () => {
      const operator = includes('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = includes('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      const operator = includes(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = includes(4);
      expect(operator(source)).toBeFalsy();
    });
  });
});
