import { pick } from './pick';

describe('pick', () => {
  describe('on array', () => {
    const source = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ];

    it('should pick one property', () => {
      const operator = pick('a');
      const expected = [{ a: 1 }, { a: 4 }];

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual([
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ]);
    });

    it('should pick two properties', () => {
      const operator = pick('a', 'b');
      const expected = [
        { a: 1, b: 2 },
        { a: 4, b: 5 },
      ];

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
      const operator = pick('a');
      const expected = { a: 1 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });

    it('should pick two properties', () => {
      const operator = pick('a', 'b');
      const expected = { a: 1, b: 2 };

      expect(operator(source)).toStrictEqual(expected);
      expect(source).toStrictEqual({ a: 1, b: 2, c: 3 });
    });
  });

  describe('others', () => {
    it('should return the input', () => {
      const operator = pick('a');
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
