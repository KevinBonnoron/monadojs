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

  it('should compile', () => {
    const numberArrayEntries: IterableIterator<[number, number]> = entries()([1, 2, 3]);
    const objectArrayEntries: IterableIterator<[number, { id: number }]> = entries()([{ id: 1 }, { id: 2 }, { id: 3 }]);

    const numberSetEntries: IterableIterator<[number, number]> = entries()(new Set([1, 2, 3]));
    const objectSetEntries: IterableIterator<[number, { id: number }]> = entries()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]));

    const numberMapEntries: IterableIterator<[number, string]> = entries()(
      new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])
    );
    const objectMapEntries: IterableIterator<[number, { id: number }]> = entries()(
      new Map([
        [1, { id: 1 }],
        [2, { id: 2 }],
        [3, { id: 3 }],
      ])
    );

    const numberObjectEntries: IterableIterator<[number, string]> = entries()({ 1: 'a', 2: 'b', 3: 'c' });
  });
});
