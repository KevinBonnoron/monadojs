import { describe, expect, it } from 'vitest';
import { mapRange } from './map-range';

describe('mapRange', () => {
  it('should compute range of value', () => {
    const operator = mapRange(0, 10, 0, 50);

    expect(operator(2)).toStrictEqual(10);
  });
});
