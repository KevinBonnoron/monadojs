import { describe, expect, it, vi } from 'vitest';
import { sample } from './sample';

describe('sample', () => {
  it('should sample array', () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < numbers.length; i++) {
      vi.spyOn(global.Math, 'random').mockReturnValue(i / numbers.length);
      expect(numbers.reduce(sample())).toStrictEqual(i);
    }
    vi.spyOn(global.Math, 'random').mockRestore();
  });
});
