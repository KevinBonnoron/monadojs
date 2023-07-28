import { describe, expectTypeOf, it } from 'vitest';
import { round } from './round';

describe('round', () => {
  it('should have correct types', () => {
    const operator = round();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
