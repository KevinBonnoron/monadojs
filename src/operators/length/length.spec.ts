import { length } from './length';

describe('length', () => {
  it('should return the length of an array', () => {
    const value = [0, 1, 2, 3];
    expect(length()(value)).toStrictEqual(4);
  });

  it('should return the length of an object', () => {
    const value = { a: 0, b: 1, c: 2, d: { e: 3 } };
    expect(length()(value)).toStrictEqual(4);
  });
});
