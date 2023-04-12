import { expectTypeOf, test } from 'vitest';
import { entries } from './entries';

test('that types works properly', () => {
  expectTypeOf(entries()([1, 2, 3])).toMatchTypeOf<IterableIterator<[number, number]>>();
  expectTypeOf(entries()([{ id: 1 }, { id: 2 }, { id: 3 }])).toMatchTypeOf<IterableIterator<[number, { id: number }]>>();
  expectTypeOf(entries()(new Set([1, 2, 3]))).toMatchTypeOf<IterableIterator<[number, number]>>();
  expectTypeOf(entries()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toMatchTypeOf<IterableIterator<[number, { id: number }]>>();
  expectTypeOf(
    entries()(
      new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])
    )
  ).toMatchTypeOf<IterableIterator<[number, string]>>();
  expectTypeOf(
    entries()(
      new Map([
        [1, { id: 1 }],
        [2, { id: 2 }],
        [3, { id: 3 }],
      ])
    )
  ).toMatchTypeOf<IterableIterator<[number, { id: number }]>>();
  expectTypeOf(entries()({ 1: 'a', 2: 'b', 3: 'c' })).toMatchTypeOf<IterableIterator<[number, string]>>();
});
