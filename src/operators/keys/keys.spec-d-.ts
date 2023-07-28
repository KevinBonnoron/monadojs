import { describe, expectTypeOf, it } from 'vitest';
import { keys } from './keys';

describe('keys', () => {
  it('should have correct types', () => {
    const operator = keys();

    expectTypeOf(operator([1, 2, 3])).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(['1', '2', '3'])).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqualTypeOf<IterableIterator<number>>();

    expectTypeOf(operator(new Set([1, 2, 3]))).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(new Set(['1', '2', '3']))).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toEqualTypeOf<IterableIterator<number>>();

    expectTypeOf(operator(new Map([[1, 'a'], [2, 'b'], [3, 'c']]))).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(operator(new Map([[1, { id: 1 }], [2, { id: 2 }], [3, { id: 3 }]]))).toEqualTypeOf<IterableIterator<number>>();

    expectTypeOf(operator({ 1: 'a', 2: 'b', 3: 'c' })).toEqualTypeOf<IterableIterator<1 | 2 | 3>>();
    expectTypeOf(operator({ a: 1, b: 2, c: 3 })).toEqualTypeOf<IterableIterator<'a' | 'b' | 'c'>>();
  });
});
