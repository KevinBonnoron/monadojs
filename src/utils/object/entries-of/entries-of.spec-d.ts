import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_SET } from '../../../../tests/test.data';
import { entriesOf } from './entries-of';

describe('entriesOf', () => {
  it('should have correct types', () => {
    expectTypeOf(entriesOf(EMPTY_ARRAY)).toEqualTypeOf<IterableIterator<[number, unknown]>>();
    expectTypeOf(entriesOf(EMPTY_SET)).toEqualTypeOf<IterableIterator<[number, unknown]>>();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expectTypeOf(entriesOf(EMPTY_MAP)).toEqualTypeOf<IterableIterator<[any, any]>>();
    expectTypeOf(entriesOf(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<IterableIterator<[never, never]>>();
  });
});
