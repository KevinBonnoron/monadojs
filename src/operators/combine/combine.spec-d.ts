import { describe, expectTypeOf, it } from 'vitest';
import type { Operator } from '../../types';
import { combine } from './combine';

describe('combine', () => {
  it('should have correct types', () => {
    expectTypeOf(combine()).toEqualTypeOf<Operator<unknown, unknown>>();
    expectTypeOf(combine(() => 1)).toEqualTypeOf<Operator<unknown, [number]>>();
    expectTypeOf(
      combine(
        () => 1,
        () => 'a',
      ),
    ).toEqualTypeOf<Operator<unknown, [number, string]>>();
    expectTypeOf(
      combine(
        () => 1,
        () => 'a',
        () => true,
      ),
    ).toEqualTypeOf<Operator<unknown, [number, string, boolean]>>();
  });
});
