import { describe, expectTypeOf, it } from 'vitest';
import { sign } from './sign';

describe('sign', () => {
  it('should have correct types', () => {
    const operator = sign();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
