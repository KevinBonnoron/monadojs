import { sort } from './sort';

describe('sort', () => {
  describe('asc', () => {
    const ascSort = (a: number, b: number) => a - b;

    it('should sort array', () => {
      const source = [0, 2, 3, 1];
      const operator = sort(ascSort);
      const expected = [0, 1, 2, 3];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const source = { a: 1, b: 2 };
      const operator = sort(ascSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('desc', () => {
    const descSort = (a: number, b: number) => b - a;

    it('should sort array', () => {
      const source = [0, 2, 3, 1];
      const operator = sort(descSort);
      const expected = [3, 2, 1, 0];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should not sort object', () => {
      const source = { a: 1, b: 2 };
      const operator = sort(descSort);
      const expected = source;

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
