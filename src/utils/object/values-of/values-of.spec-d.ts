import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../../tests/test.data';
import { valuesOf } from './values-of';

describe('valuesOf', () => {
  it('should have correct types', () => {
    expectTypeOf(valuesOf(EMPTY_ARRAY)).toEqualTypeOf<IterableIterator<unknown>>();
    expectTypeOf(valuesOf(EMPTY_SET)).toEqualTypeOf<IterableIterator<unknown>>();
    expectTypeOf(valuesOf(EMPTY_MAP)).toEqualTypeOf<IterableIterator<any>>();
    expectTypeOf(valuesOf(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<IterableIterator<never>>();
  });
});
