import { describe, expectTypeOf, it } from 'vitest';
import { upper } from './upper';

describe('upper', () => {
  it('should have correct types', () => {
    const operator = upper();

    expectTypeOf(operator('a')).toEqualTypeOf<string>();
  });
});
