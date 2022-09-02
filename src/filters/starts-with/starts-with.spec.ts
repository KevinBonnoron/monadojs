import { startsWith } from './starts-with';

describe('starts-with', () => {
  it('should return if string starts with other string', () => {
    expect(startsWith('a')('abc')).toBeTruthy();
    expect(startsWith('b')('abc')).toBeFalsy();
    expect(startsWith('a')(['abc', 'acb'])).toBeTruthy();
    expect(startsWith('b')(['abc', 'acb'])).toBeFalsy();
  });
});
