import { xor } from './xor';

describe('xor', () => {
  it('should return xor of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(xor(FALSE, FALSE)(null)).toBeFalsy();
    expect(xor(FALSE, TRUE)(null)).toBeTruthy();
    expect(xor(TRUE, FALSE)(null)).toBeTruthy();
    expect(xor(TRUE, TRUE)(null)).toBeFalsy();
    // 3 inputs
    expect(xor(FALSE, FALSE, FALSE)(null)).toBeFalsy();
    expect(xor(FALSE, FALSE, TRUE)(null)).toBeTruthy();
    expect(xor(FALSE, TRUE, FALSE)(null)).toBeTruthy();
    expect(xor(FALSE, TRUE, TRUE)(null)).toBeFalsy();
    expect(xor(TRUE, FALSE, FALSE)(null)).toBeTruthy();
    expect(xor(TRUE, FALSE, TRUE)(null)).toBeFalsy();
    expect(xor(TRUE, TRUE, FALSE)(null)).toBeFalsy();
    expect(xor(TRUE, TRUE, TRUE)(null)).toBeTruthy();
  });
});
