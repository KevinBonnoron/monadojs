import { and } from './and';

describe('and', () => {
  it('should return and of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(and(FALSE, FALSE)()).toBeFalsy();
    expect(and(FALSE, TRUE)()).toBeFalsy();
    expect(and(TRUE, FALSE)()).toBeFalsy();
    expect(and(TRUE, TRUE)()).toBeTruthy();
    // 3 inputs
    expect(and(FALSE, FALSE, FALSE)()).toBeFalsy();
    expect(and(FALSE, FALSE, TRUE)()).toBeFalsy();
    expect(and(FALSE, TRUE, FALSE)()).toBeFalsy();
    expect(and(FALSE, TRUE, TRUE)()).toBeFalsy();
    expect(and(TRUE, FALSE, FALSE)()).toBeFalsy();
    expect(and(TRUE, FALSE, TRUE)()).toBeFalsy();
    expect(and(TRUE, TRUE, FALSE)()).toBeFalsy();
    expect(and(TRUE, TRUE, TRUE)()).toBeTruthy();
  });
});
