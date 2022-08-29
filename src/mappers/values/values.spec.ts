import { values } from './values';

describe('values', () => {
  it('should return values of values', () => {
    expect([[1, 2, 3]].map(values())).toStrictEqual([[1, 2, 3]]);
    expect(
      [
        [1, 2, 3],
        [4, 5, 6],
      ].map(values())
    ).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect([{ a: 1, b: 2 }].map(values())).toStrictEqual([[1, 2]]);
    expect(values()([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(
      values()([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(values()({ a: 1, b: 2 })).toStrictEqual([1, 2]);
  });
});
