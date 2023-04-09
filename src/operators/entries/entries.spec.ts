import { entries } from './entries';

describe('entries', () => {
  const anonymousFn = function () {};
  const anonymousArrowFn = () => {};

  describe('Array', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = [1, true, 'a', [], {}, anonymousFn, anonymousArrowFn];
      const expected = [
        [0, 1],
        [1, true],
        [2, 'a'],
        [3, []],
        [4, {}],
        [5, anonymousFn],
        [6, anonymousArrowFn],
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = new Map<any, any>([
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', []],
        ['e', {}],
        ['f', anonymousFn],
        ['g', anonymousArrowFn],
      ]);
      const expected = [
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', []],
        ['e', {}],
        ['f', anonymousFn],
        ['g', anonymousArrowFn],
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = new Set<any>([1, true, 'a', [], {}, anonymousFn, anonymousArrowFn]);
      const expected = [
        [0, 1],
        [1, true],
        [2, 'a'],
        [3, []],
        [4, {}],
        [5, anonymousFn],
        [6, anonymousArrowFn],
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    const operator = entries();

    it('should return entries', () => {
      const source = { a: 1, b: true, c: 'a', d: [], e: {}, f: anonymousFn, g: anonymousArrowFn };
      const expected = [
        ['a', 1],
        ['b', true],
        ['c', 'a'],
        ['d', []],
        ['e', {}],
        ['f', anonymousFn],
        ['g', anonymousArrowFn],
      ];
      expect([...operator(source)]).toStrictEqual(expected);
    });
  });
});
