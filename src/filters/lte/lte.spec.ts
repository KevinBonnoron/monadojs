import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { lte } from './lte';

describe('lte', () => {
  describe('number', () => {
    const source = [1, 2, 3];

    it('should return true', () => {
      const operator = lte(3);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = lte(2);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = ['a', 'b', 'c'];

    it('should return true', () => {
      const operator = lte('c');
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = lte('b');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = lte(0);

    it('should not return true', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(new RegExp('a'))).toBeFalsy();
      expect(operator(DEFAULT_MAP)).toBeFalsy();
      expect(operator(DEFAULT_SET)).toBeFalsy();
      expect(operator(() => {})).toBeFalsy();
    });
  });
});
