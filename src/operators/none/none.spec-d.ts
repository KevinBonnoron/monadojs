import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../tests/test.data';
import { none } from './none';

describe('none', () => {
  it('should have correct types', () => {
    const operator = none(() => false);

    expectTypeOf(operator(null)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(operator('a')).toEqualTypeOf<boolean>();
    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(false)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<boolean>();
  });
});
