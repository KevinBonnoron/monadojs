import { describe, expect, it } from 'vitest';
import { round } from './number.utils';

describe('NumberUtils', () => {
  it('should round numbers', () => {
    expect(round(0.1 + 0.2)).toStrictEqual(0.3);
  });
});
