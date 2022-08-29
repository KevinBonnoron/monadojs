import { min } from './min';

describe('min', () => {
  it('should return the min element', () => {
    const values = [1, 3, 2];
    expect(values.reduce(min())).toStrictEqual(1);
  });
});
