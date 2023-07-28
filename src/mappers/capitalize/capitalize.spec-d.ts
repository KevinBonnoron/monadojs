import { describe, expectTypeOf, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should have correct types', () => {
    const operator = capitalize();

    expectTypeOf(operator('a')).toEqualTypeOf<string>();
  });
});
