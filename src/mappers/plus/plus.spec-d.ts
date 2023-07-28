import { describe, expectTypeOf, it } from 'vitest';
import { plus } from './plus';

describe('plus', () => {
  it('should have correct types', () => {
    const operator = plus();

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
