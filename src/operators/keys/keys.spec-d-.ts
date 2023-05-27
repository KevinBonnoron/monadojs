import { describe, expectTypeOf, it } from 'vitest';
import { keys } from './keys';

describe('keys', () => {
  it('should have correct types', () => {
    expectTypeOf(keys()([1, 2, 3])).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(keys()(['1', '2', '3'])).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(keys()([{ id: 1 }, { id: 2 }, { id: 3 }])).toMatchTypeOf<IterableIterator<number>>();

    expectTypeOf(keys()(new Set([1, 2, 3]))).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(keys()(new Set(['1', '2', '3']))).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(keys()(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toMatchTypeOf<IterableIterator<number>>();

    expectTypeOf(
      keys()(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c']
        ])
      )
    ).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(
      keys()(
        new Map([
          [1, { id: 1 }],
          [2, { id: 2 }],
          [3, { id: 3 }]
        ])
      )
    ).toMatchTypeOf<IterableIterator<number>>();

    expectTypeOf(keys()({ 1: 'a', 2: 'b', 3: 'c' })).toMatchTypeOf<IterableIterator<number>>();
    expectTypeOf(keys()({ a: 1, b: 2, c: 3 })).toMatchTypeOf<IterableIterator<string>>();
  });
});
