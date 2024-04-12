import { describe, expectTypeOf, it } from 'vitest';
import { gte } from './gte';

describe('gte', () => {
  it('should have correct types', () => {
    const operator = gte(0);

    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
  });
});
