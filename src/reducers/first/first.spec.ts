import { first } from './first';

describe('first', () => {
  it('should return first element of array', () => {
    const operator = first();

    expect([0, 1, 2].reduce(operator)).toStrictEqual(0);
    expect([null, 1, 2].reduce(operator)).toStrictEqual(null);
    expect([undefined, 1, 2].reduce(operator)).toStrictEqual(undefined);
  });
});
