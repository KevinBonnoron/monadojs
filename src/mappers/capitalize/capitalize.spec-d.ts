import { describe, expectTypeOf, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should have correct types', () => {
    expectTypeOf(capitalize()('a')).toMatchTypeOf<string>();
  });
});
