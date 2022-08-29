import { pow } from './pow';

describe('pow', () => {
  it('should pow values', () => {
    expect([0, 1, 2, 4, 8].map(pow(2))).toStrictEqual([0, 1, 4, 16, 64]);
    expect(pow(2)([0, 1, 2, 4, 8])).toStrictEqual([0, 1, 4, 16, 64]);
  });
});
