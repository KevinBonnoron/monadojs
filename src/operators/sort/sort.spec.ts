import { sort } from './sort';

describe('sort', () => {
  describe('asc', () => {
    const ascSort = (a: number, b: number) => a - b;

    it('should sort array', () => {
      const input = [0, 2, 3, 1];
      const operator = sort(ascSort);
      const expected = [0, 1, 2, 3];

      expect(operator(input)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const input = { a: 1, b: 2 };
      const operator = sort(ascSort);
      const expected = input;

      expect(operator(input)).toStrictEqual(expected);
    });
  });

  describe('desc', () => {
    const descSort = (a: number, b: number) => b - a;

    it('should sort array', () => {
      const input = [0, 2, 3, 1];
      const operator = sort(descSort);
      const expected = [3, 2, 1, 0];

      expect(operator(input)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const input = { a: 1, b: 2 };
      const operator = sort(descSort);
      const expected = input;

      expect(operator(input)).toStrictEqual(expected);
    });
  });
});
