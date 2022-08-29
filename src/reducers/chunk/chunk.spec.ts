import { chunk } from './chunk';

describe('chunk', () => {
  it('should compute aperture from array', () => {
    expect([0].reduce(chunk())).toStrictEqual(0);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(chunk())).toStrictEqual([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
    ]);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(chunk(3))).toStrictEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(chunk(4))).toStrictEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9],
    ]);

    expect([0, 1, 2, 3, 4, 5, 6, 7, 8].reduce(chunk())).toStrictEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8].reduce(chunk(3))).toStrictEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8].reduce(chunk(4))).toStrictEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
  });
});
