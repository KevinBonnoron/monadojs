import { pow } from './pow';

describe('pow', () => {
  it('should pow values', () => {
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(pow(2))).toStrictEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
    expect([-0, -1, -2, -3, -4, -5, -6, -7, -8, -9].map(pow(2))).toStrictEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
    expect(pow(2)(0)).toEqual(0);
  });
});
