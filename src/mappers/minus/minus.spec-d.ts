import { describe, expectTypeOf, it } from 'vitest';
import { minus } from './minus';

describe('minus', () => {
  it('should have correct types', () => {
    const operator = minus();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
