import { sum } from './sum';

describe('sum', () => {
  it('should return the sum', () => {
    const values = [1, 3, 2];
    expect(values.reduce(sum())).toStrictEqual(6);
  });
});
