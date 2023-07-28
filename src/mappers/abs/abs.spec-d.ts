import { describe, expectTypeOf, it } from 'vitest';
import { abs } from './abs';

describe('abs', () => {
  it('should have correct types', () => {
    const operator = abs();

    expectTypeOf(operator(-10)).toEqualTypeOf<number>();
  });
});
