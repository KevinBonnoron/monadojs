import { merge } from './merge';

describe('merge', () => {
  describe('PlainObject', () => {
    it('should merge values when adding property', () => {
      const source = { a: 1 };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = merge(sources);

      expect(operator(source)).toEqual({ a: 1, b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ a: 1 });
    });

    it('should merge values when replacing property', () => {
      const source = { b: 1 };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = merge(sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ b: 1 });
    });

    it('should merge values when adding array property', () => {
      const source = { e: [{ g: 5 }] };
      const sources = { b: 2, c: { d: 3 }, e: [{ f: 4 }] };
      const operator = merge(sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
      expect(sources).toStrictEqual({ b: 2, c: { d: 3 }, e: [{ f: 4 }] });
      expect(source).toStrictEqual({ e: [{ g: 5 }] });
    });

    it('should merge multiple values', () => {
      const source = { e: [{ g: 5 }] };
      const sources = [{ b: 2 }, { c: { d: 3 } }, { e: [{ f: 4 }] }];
      const operator = merge(...sources);

      expect(operator(source)).toEqual({ b: 2, c: { d: 3 }, e: [{ g: 5 }, { f: 4 }] });
      expect(sources).toStrictEqual([{ b: 2 }, { c: { d: 3 } }, { e: [{ f: 4 }] }]);
      expect(source).toStrictEqual({ e: [{ g: 5 }] });
    });
  });

  describe('Array', () => {
    // TODO
  });
});
