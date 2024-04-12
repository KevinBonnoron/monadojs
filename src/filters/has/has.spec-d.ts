import { describe, expectTypeOf, it } from 'vitest';
import { has } from './has';

describe('has', () => {
  it('should have correct types', () => {
    const operator = has('a');

    expectTypeOf(operator({ a: 0 })).toEqualTypeOf<boolean>();
    expectTypeOf(operator(new Map([['a', 0]]))).toEqualTypeOf<boolean>();
  });
});
