import { describe, expectTypeOf, it } from 'vitest';
import { times } from './times';

describe('times', () => {
  it('should have correct types', () => {
    const operator = times(2);

    expectTypeOf(operator(1)).toEqualTypeOf<number>();
  });
});
