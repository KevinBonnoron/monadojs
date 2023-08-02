import { describe, expectTypeOf, it } from 'vitest';
import { round } from './number.utils';

describe('NumberUtils', () => {
  it('should have correct types', () => {
    expectTypeOf(round(10)).toEqualTypeOf<number>();
    expectTypeOf(round(10, 4)).toEqualTypeOf<number>();
  });
});
