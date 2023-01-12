import { like } from './like';

describe('like', () => {
  it('should match regex', () => {
    expect(like(/[0-9]/)('1')).toBeTruthy();
    expect(like(/[a-z]/)('a')).toBeTruthy();
    expect(like(/true/)('true')).toBeTruthy();
    expect(like(/false/)('false')).toBeTruthy();
    expect(like(/[a-z]/)(['a', 'b', 'c'])).toBeTruthy();
    expect(like(/[a-z]/)('A')).toBeFalsy();
    expect(['1', '2', 'a', 'b'].filter(like(/[0-9]/)));
  });
});
