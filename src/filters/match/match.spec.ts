import { match } from './match';

describe('match', () => {
  it('should match regex', () => {
    expect(match(/[0-9]/)('1')).toBeTruthy();
    expect(match(/[a-z]/)('a')).toBeTruthy();
    expect(match(/true/)('true')).toBeTruthy();
    expect(match(/false/)('false')).toBeTruthy();
    expect(match(/[a-z]/)('A')).toBeFalsy();
    expect(['1', '2', 'a', 'b'].filter(match(/[0-9]/)));
  });
});
