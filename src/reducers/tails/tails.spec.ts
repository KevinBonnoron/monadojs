import { tails } from './tails';

describe('tails', () => {
  it('should return tails of array', () => {
    expect([2, 1, 0].reduce(tails())).toStrictEqual([0]);
    expect([2, 1, 0].reduce(tails(2))).toStrictEqual([1, 0]);
    expect([2, 1, 0].reduce(tails(3))).toStrictEqual([2, 1, 0]);
    expect([2, 1, 0].reduce(tails(4))).toStrictEqual([2, 1, 0]);
    expect([2, 1, null].reduce(tails())).toStrictEqual([null]);
    expect([2, 1, undefined].reduce(tails())).toStrictEqual([undefined]);
  });
});
