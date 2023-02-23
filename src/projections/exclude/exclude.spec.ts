import { exclude } from './exclude';

describe('exclude', () => {
  describe('on array', () => {
    const source = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];

    it('should exclude one property', () => {
      const operator = exclude('a');
      const expected = [
        { b: 2, c: 3 },
        { b: 5, c: 6 },
      ];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ]);
    });

    it('should exclude two properties', () => {
      const operator = exclude('a', 'b');
      const expected = [{ c: 3 }, { c: 6 }];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ]);
    });
  });

  describe('on object', () => {
    const source = { a: 1, b: 2, c: 3 };

    it('should pick one property', () => {
      const operator = exclude('a');
      const expected = { b: 2, c: 3 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });

    it('should pick two properties', () => {
      const operator = exclude('a', 'b');
      const expected = { c: 3 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });
  });

  describe('others', () => {
    it('should return the input', () => {
      const operator = exclude('a');
      const anonymousFn = function () {};
      const anonymousArrowFn = () => {};
      const date = new Date();

      expect(operator(1)).toStrictEqual(1);
      expect(operator('a')).toStrictEqual('a');
      expect(operator(null)).toStrictEqual(null);
      expect(operator(undefined)).toStrictEqual(undefined);
      expect(operator(date)).toStrictEqual(date);
      expect(operator(new Set('a'))).toStrictEqual(new Set('a'));
      expect(operator(new Map([['a', 1]]))).toStrictEqual(new Map([['a', 1]]));
      expect(operator(new RegExp('a'))).toStrictEqual(new RegExp('a'));
      expect(operator(anonymousFn)).toStrictEqual(anonymousFn);
      expect(operator(anonymousArrowFn)).toStrictEqual(anonymousArrowFn);
    });
  });
});
