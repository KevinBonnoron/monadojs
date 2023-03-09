import { FALSE, TRUE } from '../../utils';
import { nand } from './nand';

describe('nand', () => {
  it('should return nand of values', () => {
    // 2 inputs
    expect(nand(FALSE, FALSE)(null)).toBeTruthy();
    expect(nand(FALSE, TRUE)(null)).toBeTruthy();
    expect(nand(TRUE, FALSE)(null)).toBeTruthy();
    expect(nand(TRUE, TRUE)(null)).toBeFalsy();
    // 3 inputs
    expect(nand(FALSE, FALSE, FALSE)(null)).toBeTruthy();
    expect(nand(FALSE, FALSE, TRUE)(null)).toBeTruthy();
    expect(nand(FALSE, TRUE, FALSE)(null)).toBeTruthy();
    expect(nand(FALSE, TRUE, TRUE)(null)).toBeTruthy();
    expect(nand(TRUE, FALSE, FALSE)(null)).toBeTruthy();
    expect(nand(TRUE, FALSE, TRUE)(null)).toBeTruthy();
    expect(nand(TRUE, TRUE, FALSE)(null)).toBeTruthy();
    expect(nand(TRUE, TRUE, TRUE)(null)).toBeFalsy();
  });
});
