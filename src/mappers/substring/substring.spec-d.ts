import { describe, expectTypeOf, it } from 'vitest';
import { substring } from './substring';

describe('substring', () => {
  it('should have correct types', () => {
    const operator = substring(0);

    expectTypeOf(operator('a')).toEqualTypeOf<string>();
  });
});
