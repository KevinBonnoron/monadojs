import { sort } from './sort';

const ascSort = (a: number, b: number) => a - b;
const descSort = (a: number, b: number) => b - a;

describe('sort', () => {
  it('should sort array', () => {
    const value = [0, 2, 3, 1];
    expect(sort(ascSort)(value)).toStrictEqual([0, 1, 2, 3]);
    expect(sort(descSort)(value)).toStrictEqual([3, 2, 1, 0]);
  });

  it('should not sort object', () => {
    const value = { a: 1, b: 2 };
    expect(sort(ascSort)(value)).toBe(value);
  });
});
