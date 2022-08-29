import { endsWith } from './ends-with';

describe('ends-with', () => {
  it('should return if string ends with other string', () => {
    expect(endsWith('c')('abc')).toBeTruthy();
    expect(endsWith('b')('abc')).toBeFalsy();
  });
});
