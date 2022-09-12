import { includes } from './includes';

describe('includes', () => {
  it('should return if values includes other value', () => {
    expect(includes(1)([1, 2, 3])).toBeTruthy();
    expect(includes(0)([1, 2, 3])).toBeFalsy();
    expect(includes(1)(1)).toBeTruthy();
    expect(includes(0)(1)).toBeFalsy();
  });
});
