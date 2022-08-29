import { nor } from './nor';

describe('nor', () => {
  it('should return nor of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(nor(FALSE, FALSE)()).toBeTruthy();
    expect(nor(FALSE, TRUE)()).toBeFalsy();
    expect(nor(TRUE, FALSE)()).toBeFalsy();
    expect(nor(TRUE, TRUE)()).toBeFalsy();
    // 3 inputs
    expect(nor(FALSE, FALSE, FALSE)()).toBeTruthy();
    expect(nor(FALSE, FALSE, TRUE)()).toBeFalsy();
    expect(nor(FALSE, TRUE, FALSE)()).toBeFalsy();
    expect(nor(FALSE, TRUE, TRUE)()).toBeFalsy();
    expect(nor(TRUE, FALSE, FALSE)()).toBeFalsy();
    expect(nor(TRUE, FALSE, TRUE)()).toBeFalsy();
    expect(nor(TRUE, TRUE, FALSE)()).toBeFalsy();
    expect(nor(TRUE, TRUE, TRUE)()).toBeFalsy();
  });
});
