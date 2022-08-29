import { flatten } from './flatten';

describe('flatten', () => {
  it('should flatten array', () => {
    expect([0, [1, [2], 3], 4].reduce(flatten())).toStrictEqual([0, 1, [2], 3, 4]);
    expect([0, [1, [2], 3], 4].reduce(flatten(2))).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
