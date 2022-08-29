import { asFirst } from './as-first';

describe('with-first', () => {
  it('should sort element with specific value first', () => {
    expect([0, 1, 2, 3, 2, 1, 0].sort(asFirst(0))).toStrictEqual([0, 0, 1, 2, 3, 2, 1]);
    expect(['a', 'b', 'c', 'aa', 'bb', 'cc'].sort(asFirst('bb'))).toStrictEqual(['bb', 'a', 'b', 'c', 'aa', 'cc']);
  });
});
