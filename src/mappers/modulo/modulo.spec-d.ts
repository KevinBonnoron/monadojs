import { describe, expectTypeOf, it } from 'vitest';
import { modulo } from './modulo';

describe('modulo', () => {
  it('should have correct types', () => {
    const operator = modulo();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
