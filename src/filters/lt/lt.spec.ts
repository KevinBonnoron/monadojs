import { lt } from './lt';

describe('lt', () => {
  it('should return numbers less than the passed ones', () => {
    expect([0, 1, 2, 3].filter(lt(1))).toStrictEqual([0]);
    expect(lt(1)(0)).toBeTruthy();
    expect(lt(1)(1)).toBeFalsy();
    expect(lt(1)(2)).toBeFalsy();
  });

  it('should return strings less than or equals to the passed ones', () => {
    expect(['a', 'b', 'c', 'd'].filter(lt('b'))).toStrictEqual(['a']);
    expect(lt('b')('a')).toBeTruthy();
    expect(lt('b')('b')).toBeFalsy();
    expect(lt('b')('c')).toBeFalsy();
  });

  it('should return false for nil values', () => {
    expect(lt(1)(null as any)).toBeFalsy();
    expect(lt(1)(undefined as any)).toBeFalsy();
  });
});
