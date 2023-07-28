import { describe, expectTypeOf, it } from 'vitest';
import { pow } from './pow';

describe('pow', () => {
  it('should have correct types', () => {
    const operator = pow(2);

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
