import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../tests/test.data';
import { identity } from './identity';

describe('identity', () => {
  it('should have correct types', () => {
    const operator = identity();

    expectTypeOf(operator(null)).toEqualTypeOf<null>();
    expectTypeOf(operator(undefined)).toEqualTypeOf<undefined>();
    expectTypeOf(operator('a')).toEqualTypeOf<string>();
    expectTypeOf(operator(1)).toEqualTypeOf<number>();
    expectTypeOf(operator(false)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<typeof EMPTY_PLAIN_OBJECT>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<unknown[]>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<Set<unknown>>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<Map<any, any>>();
  });
});
