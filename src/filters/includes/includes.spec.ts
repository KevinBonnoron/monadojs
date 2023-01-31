import { includes } from './includes';

describe('includes', () => {
  it('should return if array includes value', () => {
    expect(includes(1)([1, 2, 3])).toBeTruthy();
    expect(includes(0)([1, 2, 3])).toBeFalsy();
  });

  it('should return if map includes value', () => {
    expect(
      includes(1)(
        new Map([
          ['a', 1],
          ['b', 2],
          ['c', 3],
        ])
      )
    ).toBeTruthy();
    expect(
      includes(0)(
        new Map([
          ['a', 1],
          ['b', 2],
          ['c', 3],
        ])
      )
    ).toBeFalsy();
  });

  it('should return if primitive includes value', () => {
    expect(includes(1)(1)).toBeTruthy();
    expect(includes(0)(1)).toBeFalsy();
  });
});
