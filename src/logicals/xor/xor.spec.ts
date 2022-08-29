import { xor } from './xor';

describe('xor', () => {
  it('should return xor of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(xor(FALSE, FALSE)()).toBeFalsy();
    expect(xor(FALSE, TRUE)()).toBeTruthy();
    expect(xor(TRUE, FALSE)()).toBeTruthy();
    expect(xor(TRUE, TRUE)()).toBeFalsy();
    // 3 inputs
    expect(xor(FALSE, FALSE, FALSE)()).toBeFalsy();
    expect(xor(FALSE, FALSE, TRUE)()).toBeTruthy();
    expect(xor(FALSE, TRUE, FALSE)()).toBeTruthy();
    expect(xor(FALSE, TRUE, TRUE)()).toBeFalsy();
    expect(xor(TRUE, FALSE, FALSE)()).toBeTruthy();
    expect(xor(TRUE, FALSE, TRUE)()).toBeFalsy();
    expect(xor(TRUE, TRUE, FALSE)()).toBeFalsy();
    expect(xor(TRUE, TRUE, TRUE)()).toBeTruthy();
  });
});
