import { zip } from './zip';

describe('zip', () => {
  it('should zip values', () => {
    expect(
      [
        ['a', 'b'],
        [1, 2],
        [true, false],
      ].reduce(zip())
    ).toStrictEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });
});
