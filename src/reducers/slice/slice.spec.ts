import { slice } from './slice';

describe('slice', () => {
  it('should return a slice of an array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const operator = slice();
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(input.reduce(operator)).toStrictEqual(expected);
    expect(input.reduce(operator)).not.toBe(input);
  });
});
