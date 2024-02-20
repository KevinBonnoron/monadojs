import { describe, expectTypeOf, it } from 'vitest';
import { entries } from './entries';

describe('entries', () => {
  it('should have correct types', () => {
    const operator = entries();

    expectTypeOf(operator([1, 2, 3])).toEqualTypeOf<IterableIterator<[number, number]>>();
    expectTypeOf(operator([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(operator(new Set([1, 2, 3]))).toEqualTypeOf<IterableIterator<[number, number]>>();
    expectTypeOf(operator(new Set([{ id: 1 }, { id: 2 }, { id: 3 }]))).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(
      operator(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c'],
        ]),
      ),
    ).toEqualTypeOf<IterableIterator<[number, string]>>();
    expectTypeOf(
      operator(
        new Map([
          [1, { id: 1 }],
          [2, { id: 2 }],
          [3, { id: 3 }],
        ]),
      ),
    ).toEqualTypeOf<IterableIterator<[number, { id: number }]>>();
    expectTypeOf(operator({ 1: 'a', 2: 'b', 3: 'c' })).toEqualTypeOf<IterableIterator<[1 | 2 | 3, string]>>();
  });
});
