import { first } from './first';

describe('first', () => {
  it('should return first element of array', () => {
    expect([0, 1, 2].reduce(first())).toStrictEqual(0);
    expect([null, 1, 2].reduce(first())).toStrictEqual(null);
    expect([undefined, 1, 2].reduce(first())).toStrictEqual(undefined);
  });
});
