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
});
