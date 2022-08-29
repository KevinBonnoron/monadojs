import { not } from './not';

describe('not', () => {
  it('should return not of values', () => {
    const TRUE = () => true;
    const FALSE = () => false;

    // 2 inputs
    expect(not(FALSE)()).toBeTruthy();
    expect(not(TRUE)()).toBeFalsy();
  });
});
