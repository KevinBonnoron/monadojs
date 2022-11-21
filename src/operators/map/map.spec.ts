import { map } from './map';

const plusOne = (value: number) => value + 1;

describe('map', () => {
  it('should map an array', () => {
    const value = [0, 1, 2, 3];
    expect(map(plusOne)(value)).toStrictEqual([1, 2, 3, 4]);
  });

  it('should map an object', () => {
    const value = { a: 0, b: 1, c: 2, d: 3 };
    expect(map(plusOne)(value)).toStrictEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
