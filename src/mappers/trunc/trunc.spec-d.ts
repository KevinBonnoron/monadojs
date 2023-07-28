import { describe, expectTypeOf, it } from 'vitest';
import { trunc } from './trunc';

describe('trunc', () => {
  it('should have correct types', () => {
    const operator = trunc();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
