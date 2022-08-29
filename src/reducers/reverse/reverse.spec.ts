import { reverse } from './reverse';

describe('reverse', () => {
  it('should reverse array', () => {
    expect([0, 1, 2].reduce(reverse())).toStrictEqual([2, 1, 0]);
  });
});
