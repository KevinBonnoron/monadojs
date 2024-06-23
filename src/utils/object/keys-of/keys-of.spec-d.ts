import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../../tests/test.data';
import { keysOf } from './keys-of';

describe('keysOf', () => {
  it('should have correct types', () => {
    expectTypeOf(keysOf(EMPTY_ARRAY)).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(keysOf(EMPTY_SET)).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(keysOf(EMPTY_MAP)).toEqualTypeOf<IterableIterator<unknown>>();
    expectTypeOf(keysOf(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<IterableIterator<never>>();
  });
});
