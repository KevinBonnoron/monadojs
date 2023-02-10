import { DEFAULT_MAP } from '../../../tests/test.data';
import { hasKey } from './has-key';

describe('has-key', () => {
  describe('object', () => {
    const source = { a: 1, b: 2, c: 3 };

    it('should return true', () => {
      const operator = hasKey('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = hasKey('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('map', () => {
    const source = DEFAULT_MAP;

    it('should return true', () => {
      const operator = hasKey(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should not return true', () => {
      const operator = hasKey(3);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('others', () => {
    const operator = hasKey('a');

    it('should not return true', () => {
      expect(operator('a')).toBeFalsy();
      expect(operator(1)).toBeFalsy();
      expect(operator(['a'])).toBeFalsy();
      expect(operator(null)).toBeFalsy();
      expect(operator(undefined)).toBeFalsy();
      expect(operator(new Date())).toBeFalsy();
      expect(operator(new Set('a'))).toBeFalsy();
      expect(operator(new RegExp('a'))).toBeFalsy();
      expect(operator(function () {})).toBeFalsy();
      expect(operator(() => {})).toBeFalsy();
    });
  });
});
