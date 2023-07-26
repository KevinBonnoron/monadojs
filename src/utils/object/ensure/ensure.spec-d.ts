import { describe, expectTypeOf, it } from 'vitest';
import { ensure } from './ensure';

describe('ensure', () => {
  it('should have correct types', () => {
    expectTypeOf(ensure('a')).toEqualTypeOf<'a'>();
    expectTypeOf(ensure(1)).toEqualTypeOf<1>();
    expectTypeOf(ensure(null)).toEqualTypeOf<never>();
    expectTypeOf(ensure(null, new Error('Custom error'))).toEqualTypeOf<never>();
    expectTypeOf(ensure(null, { defaultValue: new Error('Wanted error') })).toEqualTypeOf<Error>();
    expectTypeOf(ensure(null, { error: new Error('Custom error') })).toEqualTypeOf<never>();
    expectTypeOf(ensure(null, {})).toEqualTypeOf<object>();
  });
});
