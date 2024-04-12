import { describe, expectTypeOf, it } from 'vitest';
import { gt } from './gt';

describe('gt', () => {
  it('should have correct types', () => {
    const operator = gt(0);

    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
  });
});
