import { describe, expect, it } from 'vitest';
import { modulo } from './modulo';

describe('modulo', () => {
  it('should add values', () => {
    expect([1, 2].map(modulo())).toStrictEqual([0, 0]);
    expect([1, 2].map(modulo(1))).toStrictEqual([0, 0]);
    expect(modulo()(1)).toStrictEqual(0);
    expect(modulo(1)(1)).toStrictEqual(0);
  });
});
