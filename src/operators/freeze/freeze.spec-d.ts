import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../tests/test.data';
import { freeze } from './freeze';

describe('freeze', () => {
  it('should have correct types', () => {
    const operator = freeze();

    expectTypeOf(operator(null)).toEqualTypeOf<null>();
    expectTypeOf(operator(undefined)).toEqualTypeOf<undefined>();
    expectTypeOf(operator('a')).toEqualTypeOf<string>();
    expectTypeOf(operator(1)).toEqualTypeOf<number>();
    expectTypeOf(operator(false)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<typeof EMPTY_PLAIN_OBJECT>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<Readonly<unknown[]>>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<Readonly<Set<unknown>>>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<Readonly<Map<unknown, unknown>>>();
  });
});
