import { describe, expect, it, vi } from 'vitest';
import { tap } from './tap';

describe('tap', () => {
  it('should tap value', () => {
    const source = [0, 1, 2, 3];
    const tapFn = vi.fn(() => {});
    expect(tap(tapFn)(source)).toBe(source);
    expect(tapFn).toHaveBeenCalledWith(source);
  });
});
