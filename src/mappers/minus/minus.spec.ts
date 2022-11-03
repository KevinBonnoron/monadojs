import { minus } from './minus';

describe('minus', () => {
  it('should substract values', () => {
    expect([1, 2].map(minus())).toStrictEqual([0, 1]);
    expect([1, 2].map(minus(1))).toStrictEqual([0, 1]);
    expect(minus()(1)).toStrictEqual(0);
    expect(minus(1)(1)).toStrictEqual(0);
  });
});
