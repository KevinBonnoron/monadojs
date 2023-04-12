import { describe, expect, it } from 'vitest';
import { round } from './round';

describe('round', () => {
  it('should return a replaced string', () => {
    expect([0.1, 0.02, 0.003, 0.0004, 0.00005, 0.000006].map(round())).toStrictEqual([0.1, 0.02, 0, 0, 0, 0]);
    expect([0.1, 0.02, 0.003, 0.0004, 0.00005, 0.000006].map(round(3))).toStrictEqual([0.1, 0.02, 0.003, 0, 0, 0]);
    expect(round()(0.1 + 0.2)).toStrictEqual(0.3);
  });
});
