import { or } from './or';

describe('or', () => {
  it('should return or of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(or(FALSE, FALSE)()).toBeFalsy();
    expect(or(FALSE, TRUE)()).toBeTruthy();
    expect(or(TRUE, FALSE)()).toBeTruthy();
    expect(or(TRUE, TRUE)()).toBeTruthy();
    // 3 inputs
    expect(or(FALSE, FALSE, FALSE)()).toBeFalsy();
    expect(or(FALSE, FALSE, TRUE)()).toBeTruthy();
    expect(or(FALSE, TRUE, FALSE)()).toBeTruthy();
    expect(or(FALSE, TRUE, TRUE)()).toBeTruthy();
    expect(or(TRUE, FALSE, FALSE)()).toBeTruthy();
    expect(or(TRUE, FALSE, TRUE)()).toBeTruthy();
    expect(or(TRUE, TRUE, FALSE)()).toBeTruthy();
    expect(or(TRUE, TRUE, TRUE)()).toBeTruthy();
  });
});
