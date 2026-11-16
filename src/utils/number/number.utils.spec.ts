import { describe, expect, it } from 'vitest';
import { round } from './number.utils';

describe('NumberUtils', () => {
  it('should round numbers', () => {
    expect(round(0.1 + 0.2)).toStrictEqual(0.3);
  });

  it('should round to nearest instead of flooring', () => {
    expect(round(1.666, 2)).toStrictEqual(1.67);
    expect(round(0.57)).toStrictEqual(0.57);
  });
});
