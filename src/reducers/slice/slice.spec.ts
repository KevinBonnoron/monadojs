import { slice } from './slice';

describe('slice', () => {
  it('should return a slice of an array', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(values.reduce(slice())).toStrictEqual(values);
    expect(values.reduce(slice())).not.toBe(values);
  });
});
