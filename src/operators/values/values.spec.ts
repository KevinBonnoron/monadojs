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

  it('should compile', () => {
    const numberArrayEntries: IterableIterator<number> = values()([1, 2, 3]);
    const objectArrayEntries: IterableIterator<{ id: number }> = values()([{ id: 1 }, { id: 2 }, { id: 3 }]);

    const numberSetEntries: IterableIterator<number> = values()(new Set([1, 2, 3]));
    const objectSetEntries: IterableIterator<{ id: number }> = values()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]));

    const numberMapEntries: IterableIterator<string> = values()(
      new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])
    );
    const objectMapEntries: IterableIterator<{ id: number }> = values()(
      new Map([
        [1, { id: 1 }],
        [2, { id: 2 }],
        [3, { id: 3 }],
      ])
    );

    const numberObjectEntries: IterableIterator<string> = values()({ 1: 'a', 2: 'b', 3: 'c' });
  });
});
