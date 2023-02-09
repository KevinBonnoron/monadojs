import { tap } from './tap';

describe('tap', () => {
  it('should tap value', () => {
    const source = [0, 1, 2, 3];
    const tapFn = jest.fn(() => {});
    expect(tap(tapFn)(source)).toBe(source);
    expect(tapFn).toHaveBeenCalledWith(source);
  });
});
