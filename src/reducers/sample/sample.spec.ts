import { describe, expect, it, vi } from 'vitest';
import { sample } from './sample';

describe('sample', () => {
  it('should sample array', () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const spy = vi.spyOn(global.Math, 'random').mockReturnValue(5 / numbers.length);
    expect(numbers.reduce(sample())).toStrictEqual(5);
    spy.mockRestore();
  });
});
