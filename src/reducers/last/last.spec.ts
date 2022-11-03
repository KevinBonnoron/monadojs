import { last } from './last';

describe('last', () => {
  it('should return last element of array', () => {
    expect([2, 1, 0].reduce(last())).toStrictEqual(0);
    expect([2, 1, null].reduce(last())).toStrictEqual(null);
    expect([2, 1, undefined].reduce(last())).toStrictEqual(undefined);
  });
});
