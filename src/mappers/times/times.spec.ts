import { times } from './times';

describe('times', () => {
  it('should multiply values', () => {
    expect(times(1)(2)).toStrictEqual(2);
    expect([1, 2].map(times(2))).toStrictEqual([2, 4]);
  });
});
