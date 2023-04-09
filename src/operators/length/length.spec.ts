import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { length } from './length';

describe('length', () => {
  describe('Array', () => {
    const operator = length();

    it('should return the length', () => {
      const source = DEFAULT_ARRAY;
      expect(operator(source)).toStrictEqual(3);
    });
  });

  describe('Set', () => {
    const operator = length();

    it('should return the length', () => {
      const source = DEFAULT_SET;
      expect(operator(source)).toStrictEqual(3);
    });
  });

  describe('Map', () => {
    const operator = length();

    it('should return the length', () => {
      const source = DEFAULT_MAP;
      expect(operator(source)).toStrictEqual(3);
    });
  });

  describe('PlainObject', () => {
    const operator = length();

    it('should return the length', () => {
      const source = { a: 0, b: 1, c: 2, d: { e: 3 } };
      expect(operator(source)).toStrictEqual(4);
    });
  });

  describe('others', () => {
    const operator = length();

    it('should return 0', () => {
      expect(operator('a')).toStrictEqual(0);
      expect(operator(0)).toStrictEqual(0);
      expect(operator(true)).toStrictEqual(0);
      expect(operator(new Date())).toStrictEqual(0);
      expect(operator(new RegExp('a'))).toStrictEqual(0);
      expect(operator(function () {})).toStrictEqual(0);
      expect(operator(() => {})).toStrictEqual(0);
    });
  });
});
