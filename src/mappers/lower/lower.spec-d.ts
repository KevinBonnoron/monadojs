import { describe, expectTypeOf, it } from 'vitest';
import { lower } from './lower';

describe('lower', () => {
  it('should have correct types', () => {
    const operator = lower();

    expectTypeOf(operator('ABC')).toEqualTypeOf<string>();
  });
});
