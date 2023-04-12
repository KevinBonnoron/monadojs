import { describe, expect, it } from 'vitest';
import { range } from './range';

describe('range', () => {
  it('should compute range of value', () => {
    expect(range(0, 10, 0, 50)(2)).toStrictEqual(10);
  });
});
