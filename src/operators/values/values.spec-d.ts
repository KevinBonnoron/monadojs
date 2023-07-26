import { describe, expectTypeOf, it } from 'vitest';
import { values } from './values';

describe('values', () => {
  it('should have correct types', () => {
    expectTypeOf(values()([1, 2, 3])).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(values()(['1', '2', '3'])).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(values()([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqualTypeOf<IterableIterator<{ id: number }>>();

    expectTypeOf(values()(new Set([1, 2, 3]))).toEqualTypeOf<IterableIterator<number>>();
    expectTypeOf(values()(new Set(['1', '2', '3']))).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(values()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toEqualTypeOf<IterableIterator<{ id: number }>>();

    expectTypeOf(
      values()(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c']
        ])
      )
    ).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(
      values()(
        new Map([
          [1, { id: 1 }],
          [2, { id: 2 }],
          [3, { id: 3 }]
        ])
      )
    ).toEqualTypeOf<IterableIterator<{ id: number }>>();

    expectTypeOf(values()({ 1: 'a', 2: 'b', 3: 'c' })).toEqualTypeOf<IterableIterator<string>>();
    expectTypeOf(values()({ a: 1, b: 2, c: 3 })).toEqualTypeOf<IterableIterator<number>>();
  });
});
