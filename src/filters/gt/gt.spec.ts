import { DEFAULT_ARRAY, DEFAULT_DATE, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { gt } from './gt';

describe('gt', () => {
  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = gt(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gt(3);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = gt('');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gt('c');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = gt(0);

    it('should return false', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(true)).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(DEFAULT_DATE)).toBeFalsy();
      expect(operator(DEFAULT_ARRAY)).toBeFalsy();
      expect(operator(DEFAULT_SET)).toBeFalsy();
      expect(operator(DEFAULT_MAP)).toBeFalsy();
      expect(operator(new RegExp('a'))).toBeFalsy();
      expect(operator(() => {})).toBeFalsy();
    });
  });
});
