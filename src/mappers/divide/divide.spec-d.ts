import { describe, expectTypeOf, it } from 'vitest';
import { divide } from './divide';

describe('divide', () => {
  it('should have correct types', () => {
    const operator = divide(5);

    expectTypeOf(operator(10)).toEqualTypeOf<number>();
  });
});
