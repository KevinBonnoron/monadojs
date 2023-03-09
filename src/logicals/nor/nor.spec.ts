import { FALSE, TRUE } from '../../utils';
import { nor } from './nor';

describe('nor', () => {
  it('should return nor of values', () => {
    // 2 inputs
    expect(nor(FALSE, FALSE)(null)).toBeTruthy();
    expect(nor(FALSE, TRUE)(null)).toBeFalsy();
    expect(nor(TRUE, FALSE)(null)).toBeFalsy();
    expect(nor(TRUE, TRUE)(null)).toBeFalsy();
    // 3 inputs
    expect(nor(FALSE, FALSE, FALSE)(null)).toBeTruthy();
    expect(nor(FALSE, FALSE, TRUE)(null)).toBeFalsy();
    expect(nor(FALSE, TRUE, FALSE)(null)).toBeFalsy();
    expect(nor(FALSE, TRUE, TRUE)(null)).toBeFalsy();
    expect(nor(TRUE, FALSE, FALSE)(null)).toBeFalsy();
    expect(nor(TRUE, FALSE, TRUE)(null)).toBeFalsy();
    expect(nor(TRUE, TRUE, FALSE)(null)).toBeFalsy();
    expect(nor(TRUE, TRUE, TRUE)(null)).toBeFalsy();
  });
});
