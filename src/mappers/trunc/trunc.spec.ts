import { describe, expect, it } from 'vitest';
import { trunc } from './trunc';

describe('trunc', () => {
  it('should trunc values', () => {
    expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(trunc())).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect([-0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9].map(trunc())).toStrictEqual([-0, -0, -0, -0, -0, -0, -0, -0, -0, -0]);
    expect(trunc()(0.0)).toEqual(0);
  });
});
