import { DEFAULT_SET } from '../../../tests/test.data';
import { keys } from './keys';

describe('keys', () => {
  const operator = keys();
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  describe('Array', () => {
    it('should return keys', () => {
      const source = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];
      expect(operator(source)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Map', () => {
    it('should return keys', () => {
      const source = new Map<any, any>([
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', []],
        ['e', {}],
        ['f', anonymousFn],
        ['g', anonymousArrowFn],
      ]);
      expect(operator(source)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });

  describe('PlainObject', () => {
    it('should return keys', () => {
      const source = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn };
      expect(operator(source)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });

  describe('others', () => {
    it('should return empty array', () => {
      expect(operator('a')).toStrictEqual([]);
      expect(operator(0)).toStrictEqual([]);
      expect(operator(true)).toStrictEqual([]);
      expect(operator(new Date())).toStrictEqual([]);
      expect(operator(new Set('a'))).toStrictEqual([]);
      expect(operator(new RegExp('a'))).toStrictEqual([]);
      expect(operator(DEFAULT_SET)).toStrictEqual([]);
      expect(operator(anonymousFn)).toStrictEqual([]);
      expect(operator(anonymousArrowFn)).toStrictEqual([]);
    });
  });
});
