import { slice } from './slice';

describe('slice', () => {
  it('should return a slice of an array', () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const operator = slice(5);
    const expected = [6, 7, 8, 9, 10];

    expect(source.reduce(operator)).toStrictEqual(expected);
    expect(source).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
