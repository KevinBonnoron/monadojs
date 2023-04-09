import { DEFAULT_ARRAY, DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
import { keys } from './keys';

describe('keys', () => {
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  describe('Array', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = DEFAULT_ARRAY;
      expect([...operator(source)]).toStrictEqual([0, 1, 2]);
    });
  });

  describe('Set', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = DEFAULT_SET;
      expect([...operator(source)]).toStrictEqual([0, 1, 2]);
    });
  });

  describe('Map', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = DEFAULT_MAP;
      expect([...operator(source)]).toStrictEqual([1, 2, 3]);
    });
  });

  describe('PlainObject', () => {
    const operator = keys();

    it('should return keys', () => {
      const source = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn };
      expect([...operator(source)]).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });

  describe('others', () => {
    const operator = keys();

    it('should return empty array', () => {
      expect([...operator('a')]).toStrictEqual([]);
      expect([...operator(0)]).toStrictEqual([]);
      expect([...operator(true)]).toStrictEqual([]);
      expect([...operator(new Date())]).toStrictEqual([]);
      expect([...operator(new RegExp('a'))]).toStrictEqual([]);
      expect([...operator(anonymousFn)]).toStrictEqual([]);
      expect([...operator(anonymousArrowFn)]).toStrictEqual([]);
    });
  });
});
