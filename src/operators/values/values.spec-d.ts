import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, STRING_ARRAY, STRING_MAP, STRING_SET } from '../../../tests/test.data';
import { values } from './values';

describe('values', () => {
  it('should have correct types', () => {
    const operator = values();

    expectTypeOf(operator(NUMBER_ARRAY)).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(STRING_ARRAY)).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(operator([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqualTypeOf<IterableIterator<{ id: number }>>();

    expectTypeOf(operator(NUMBER_SET)).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(STRING_SET)).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(operator(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toEqualTypeOf<IterableIterator<{ id: number }>>();

    expectTypeOf(operator(STRING_MAP)).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(operator(NUMBER_MAP)).toEqualTypeOf<IterableIterator<number>>();

    expectTypeOf(operator({ 1: 'a', 2: 'b', 3: 'c' })).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(operator({ a: 1, b: 2, c: 3 })).toEqualTypeOf<IterableIterator<number>>();
  });
});
