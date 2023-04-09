import { exclude } from './exclude';

describe('exclude', () => {
  describe('PlainObject', () => {
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
});
