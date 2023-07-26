import { describe, expectTypeOf, it } from 'vitest';
import { entries } from './entries';

describe('entries', () => {
  it('should have correct types', () => {
    expectTypeOf(entries()([1, 2, 3])).toEqualTypeOf<IterableIterator<[number, number]>>();
    expectTypeOf(entries()([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(entries()(new Set([1, 2, 3]))).toEqualTypeOf<IterableIterator<[number, number]>>();
    expectTypeOf(entries()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(
      entries()(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c']
        ])
      )
    ).toEqualTypeOf<IterableIterator<[number, string]>>();
    expectTypeOf(
      entries()(
        new Map([
          [1, { id: 1 }],
          [2, { id: 2 }],
          [3, { id: 3 }]
        ])
      )
    ).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(entries()({ 1: 'a', 2: 'b', 3: 'c' })).toEqualTypeOf<IterableIterator<[number, string]>>();
  });
});
