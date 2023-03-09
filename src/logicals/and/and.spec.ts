import { FALSE, TRUE } from '../../utils';
import { and } from './and';

describe('and', () => {
  it('should return and of values', () => {
    // 2 inputs
    expect(and(FALSE, FALSE)(null)).toBeFalsy();
    expect(and(FALSE, TRUE)(null)).toBeFalsy();
    expect(and(TRUE, FALSE)(null)).toBeFalsy();
    expect(and(TRUE, TRUE)(null)).toBeTruthy();
    // 3 inputs
    expect(and(FALSE, FALSE, FALSE)(null)).toBeFalsy();
    expect(and(FALSE, FALSE, TRUE)(null)).toBeFalsy();
    expect(and(FALSE, TRUE, FALSE)(null)).toBeFalsy();
    expect(and(FALSE, TRUE, TRUE)(null)).toBeFalsy();
    expect(and(TRUE, FALSE, FALSE)(null)).toBeFalsy();
    expect(and(TRUE, FALSE, TRUE)(null)).toBeFalsy();
    expect(and(TRUE, TRUE, FALSE)(null)).toBeFalsy();
    expect(and(TRUE, TRUE, TRUE)(null)).toBeTruthy();
  });
});
