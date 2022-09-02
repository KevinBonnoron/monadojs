import { reverse } from './reverse';

describe('reverse', () => {
  it('should reverse array', () => {
    expect(reverse()([0, 1, 2])).toStrictEqual([2, 1, 0]);
    expect(reverse()(0)).toStrictEqual(0);
  });
});
