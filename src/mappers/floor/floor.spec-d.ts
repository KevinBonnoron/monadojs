import { describe, expectTypeOf, it } from 'vitest';
import { floor } from './floor';

describe('floor', () => {
  it('should have correct types', () => {
    const operator = floor();

    expectTypeOf(operator(10)).toEqualTypeOf<number>();
  });
});
