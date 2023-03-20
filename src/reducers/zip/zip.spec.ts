import { zip } from './zip';

describe('zip', () => {
  it('should zip values', () => {
    const operator = zip();
    const source = [
      ['a', 'b'],
      [1, 2],
      [true, false],
    ];

    expect(source.reduce(operator)).toStrictEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });
});
