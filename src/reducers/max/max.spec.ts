import { max } from './max';

describe('max', () => {
  it('should return the max element', () => {
    const values = [1, 3, 2];
    expect(values.reduce(max())).toStrictEqual(3);
  });
});
