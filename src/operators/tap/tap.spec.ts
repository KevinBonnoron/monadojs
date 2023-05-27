import { describe, expect, it, vi } from 'vitest';
import { anonymousArrowFn } from '../../../tests/test.data';
import { tap } from './tap';

describe('tap', () => {
  it('should tap value', () => {
    const source = [0, 1, 2, 3];
    const tapFn = vi.fn(anonymousArrowFn);
    expect(tap(tapFn)(source)).toBe(source);
    expect(tapFn).toHaveBeenCalledWith(source);
  });
});
