import { asLast } from './as-last';

describe('as-last', () => {
  it('should sort element with specific value last', () => {
    expect([0, 1, 2, 3, 2, 1, 0].sort(asLast(0))).toStrictEqual([1, 2, 3, 2, 1, 0, 0]);
    expect(['a', 'b', 'c', 'aa', 'bb', 'cc'].sort(asLast('bb'))).toStrictEqual(['a', 'b', 'c', 'aa', 'cc', 'bb']);
  });
});
