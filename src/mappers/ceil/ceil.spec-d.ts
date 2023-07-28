import { describe, expectTypeOf, it } from 'vitest';
import { ceil } from './ceil';

describe('ceil', () => {
  it('should have correct types', () => {
    const operator = ceil();

    expectTypeOf(operator(1.0)).toEqualTypeOf<number>();
  });
});
