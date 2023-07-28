import { describe, expectTypeOf, it } from 'vitest';
import { replace } from './replace';

describe('replace', () => {
  it('should have correct types', () => {
    const operator = replace('a', 'b');

    expectTypeOf(operator('a')).toEqualTypeOf<string>();
  });
});
