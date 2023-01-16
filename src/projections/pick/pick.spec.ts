import { pick } from './pick';

describe('pick', () => {
  describe('on array', () => {
    it('should pick one property', () => {
      const input = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const operator = pick('a');
      const expected = [{ a: 1 }, { a: 4 }];

      expect(operator(input)).toStrictEqual(expected);
    });

    it('should pick two properties', () => {
      const input = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const operator = pick('a', 'b');
      const expected = [
        { a: 1, b: 2 },
        { a: 4, b: 5 },
      ];

      expect(operator(input)).toStrictEqual(expected);
    });
  });

  describe('on object', () => {
    it('should pick one property', () => {
      const input = { a: 1, b: 2, c: 3 };
      const operator = pick('a');
      const expected = { a: 1 };

      expect(operator(input)).toStrictEqual(expected);
    });

    it('should pick two properties', () => {
      const input = { a: 1, b: 2, c: 3 };
      const operator = pick('a', 'b');
      const expected = { a: 1, b: 2 };

      expect(operator(input)).toStrictEqual(expected);
    });
  });
});
