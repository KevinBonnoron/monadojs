import { DEFAULT_MAP, DEFAULT_SET } from '../../../tests/test.data';
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

      expect(operator('a')).toStrictEqual('a');
      expect(operator(1)).toStrictEqual(1);
      expect(operator(true)).toStrictEqual(true);
      expect(operator(null)).toStrictEqual(null);
      expect(operator(undefined)).toStrictEqual(undefined);
      expect(operator(date)).toStrictEqual(date);
      expect(operator(DEFAULT_SET)).toStrictEqual(DEFAULT_SET);
      expect(operator(DEFAULT_MAP)).toStrictEqual(DEFAULT_MAP);
      expect(operator(new RegExp('a'))).toStrictEqual(new RegExp('a'));
      expect(operator(anonymousFn)).toStrictEqual(anonymousFn);
      expect(operator(anonymousArrowFn)).toStrictEqual(anonymousArrowFn);
    });
  });
});
