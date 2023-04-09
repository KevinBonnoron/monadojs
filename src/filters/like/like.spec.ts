import { DEFAULT_ARRAY, DEFAULT_DATE, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { like } from './like';

describe('like', () => {
  describe('string', () => {
    const operator = like(/[a-z]/);

    it('should return true', () => {
      const source = 'abc';
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const source = '123';
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = like(/[0-9]/);

    it('should return false', () => {
      expect(operator(0)).toBeFalsy();
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
