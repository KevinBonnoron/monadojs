import { plus } from './plus';

describe('plus', () => {
  it('should add values', () => {
    expect(plus()(1)).toStrictEqual(2);
    expect(plus(1)(1)).toStrictEqual(2);
    expect([1, 2].map(plus(1))).toStrictEqual([2, 3]);
  });
});
