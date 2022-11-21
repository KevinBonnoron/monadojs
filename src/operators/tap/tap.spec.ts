import { tap } from './tap';

describe('tap', () => {
  it('should tap value', () => {
    const input = [0, 1, 2, 3];
    const tapFn = jest.fn(() => {});
    expect(tap(tapFn)(input)).toBe(input);
    expect(tapFn).toHaveBeenCalledWith(input);
  });
});
