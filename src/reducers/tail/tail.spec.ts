import { tail } from './tail';

describe('tail', () => {
  it('should return tail of array', () => {
    expect([2, 1, 0].reduce(tail())).toStrictEqual(0);
    expect([2, 1, null].reduce(tail())).toStrictEqual(null);
    expect([2, 1, undefined].reduce(tail())).toStrictEqual(undefined);
  });
});
