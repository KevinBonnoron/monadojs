import { lte } from './lte';

describe('lte', () => {
  it('should return numbers less than or equals to the passed ones', () => {
    expect([0, 1, 2, 3].filter(lte(1))).toStrictEqual([0, 1]);
    expect(lte(1)(0)).toBeTruthy();
    expect(lte(1)(1)).toBeTruthy();
    expect(lte(1)(2)).toBeFalsy();
  });

  it('should return strings less than or equals to the passed ones', () => {
    expect(['a', 'b', 'c', 'd'].filter(lte('b'))).toStrictEqual(['a', 'b']);
    expect(lte('b')('a')).toBeTruthy();
    expect(lte('b')('b')).toBeTruthy();
    expect(lte('b')('c')).toBeFalsy();
  });

  it('should return false for nil values', () => {
    expect(lte(1)(null as any)).toBeFalsy();
    expect(lte(1)(undefined as any)).toBeFalsy();
  });
});
