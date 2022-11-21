import { gte } from './gte';

describe('gte', () => {
  it('should return numbers greater than or equals to passed ones', () => {
    expect([0, 1, 2, 3].filter(gte(1))).toStrictEqual([1, 2, 3]);
    expect(gte(1)(2)).toBeTruthy();
    expect(gte(1)(1)).toBeTruthy();
    expect(gte(1)(0)).toBeFalsy();
  });

  it('should return strings greater than or equals to the passed ones', () => {
    expect(['a', 'b', 'c', 'd'].filter(gte('b'))).toStrictEqual(['b', 'c', 'd']);
    expect(gte('b')('c')).toBeTruthy();
    expect(gte('b')('b')).toBeTruthy();
    expect(gte('b')('a')).toBeFalsy();
  });

  it('should return false for nil values', () => {
    expect(gte(1)(null as any)).toBeFalsy();
    expect(gte(1)(undefined as any)).toBeFalsy();
  });
});
