import { add } from './add';

describe('add', () => {
  it('should add values', () => {
    expect(add()(1)).toStrictEqual(2);
    expect([1, 2].map(add(1))).toStrictEqual([2, 3]);
  });
});
