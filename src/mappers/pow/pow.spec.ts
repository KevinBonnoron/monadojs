import { pow } from './pow';

describe('pow', () => {
  it('should pow values', () => {
    expect(pow(2)(0)).toEqual(0);
    expect([0, 1, 2, 4, 8].map(pow(2))).toStrictEqual([0, 1, 4, 16, 64]);
  });
});
