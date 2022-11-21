import { gt } from './gt';

describe('gt', () => {
  it('should return numbers greater than the passed ones', () => {
    expect([0, 1, 2, 3].filter(gt(1))).toStrictEqual([2, 3]);
    expect(gt(1)(2)).toBeTruthy();
    expect(gt(1)(1)).toBeFalsy();
    expect(gt(1)(0)).toBeFalsy();
  });

  it('should return strings greater than the passed ones', () => {
    expect(['a', 'b', 'c', 'd'].filter(gt('b'))).toStrictEqual(['c', 'd']);
    expect(gt('b')('c')).toBeTruthy();
    expect(gt('b')('b')).toBeFalsy();
    expect(gt('b')('a')).toBeFalsy();
  });

  it('should return false for nil values', () => {
    expect(gt(1)(null as any)).toBeFalsy();
    expect(gt(1)(undefined as any)).toBeFalsy();
  });
});
