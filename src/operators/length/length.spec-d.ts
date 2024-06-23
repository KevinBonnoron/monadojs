import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../tests/test.data';
import { length } from './length';

describe('length', () => {
  it('should have correct types', () => {
    const operator = length();

    expectTypeOf(operator(null)).toEqualTypeOf<number>();
    expectTypeOf(operator(undefined)).toEqualTypeOf<number>();
    expectTypeOf(operator('a')).toEqualTypeOf<number>();
    expectTypeOf(operator(1)).toEqualTypeOf<number>();
    expectTypeOf(operator(false)).toEqualTypeOf<number>();
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<number>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<number>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<number>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<number>();
  });
});
