import { describe, expectTypeOf, it } from 'vitest';
import { ceil } from './ceil';

describe('ceil', () => {
  it('should have correct types', () => {
    expectTypeOf(ceil()(1.0)).toMatchTypeOf<number>();
  });
});
