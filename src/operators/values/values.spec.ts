import { values } from './values';

describe('values', () => {
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  describe('Array', () => {
    const operator = values();

    it('should return values', () => {
      const source = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];
      const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const operator = values();

    it('should return values', () => {
      const source = new Set([1, true, 'a', [], {}, anonymousFn, anonymousArrowFn]);
      const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const operator = values();

    it('should return values', () => {
      const source = new Map<any, any>([
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', []],
        ['e', {}],
        ['f', anonymousFn],
        ['g', anonymousArrowFn],
      ]);

      const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    const operator = values();

    it('should return values', () => {
      const source = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn };
      const expected = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];

      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('others', () => {
    const operator = values();

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
