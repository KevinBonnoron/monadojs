import { nth } from './nth';

describe('nth', () => {
  it('should return the nth element', () => {
    const values = [1, 3, 2];
    expect(values.reduce(nth(1))).toStrictEqual(3);
    expect(values.reduce(nth(-1))).toStrictEqual(2);
    expect(values.reduce(nth(-2))).toStrictEqual(3);
  });
});
