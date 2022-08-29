import { nand } from './nand';

describe('nand', () => {
  it('should return nand of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(nand(FALSE, FALSE)()).toBeTruthy();
    expect(nand(FALSE, TRUE)()).toBeTruthy();
    expect(nand(TRUE, FALSE)()).toBeTruthy();
    expect(nand(TRUE, TRUE)()).toBeFalsy();
    // 3 inputs
    expect(nand(FALSE, FALSE, FALSE)()).toBeTruthy();
    expect(nand(FALSE, FALSE, TRUE)()).toBeTruthy();
    expect(nand(FALSE, TRUE, FALSE)()).toBeTruthy();
    expect(nand(FALSE, TRUE, TRUE)()).toBeTruthy();
    expect(nand(TRUE, FALSE, FALSE)()).toBeTruthy();
    expect(nand(TRUE, FALSE, TRUE)()).toBeTruthy();
    expect(nand(TRUE, TRUE, FALSE)()).toBeTruthy();
    expect(nand(TRUE, TRUE, TRUE)()).toBeFalsy();
  });
});
