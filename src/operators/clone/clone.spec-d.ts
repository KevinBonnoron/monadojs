import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_RESOLVED_PROMISE, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { nil } from '../../types';
import { clone } from './clone';

describe('clone', () => {
  it('should have correct types', () => {
    const operator = clone();

    expectTypeOf(operator(null)).toEqualTypeOf<null>();
    expectTypeOf(operator(undefined)).toEqualTypeOf<undefined>();
    expectTypeOf(operator(nil)).toEqualTypeOf<nil>();
    expectTypeOf(operator('a')).toEqualTypeOf<string>();
    expectTypeOf(operator(1.0)).toEqualTypeOf<number>();
    expectTypeOf(operator(true)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(DEFAULT_SYMBOL)).toEqualTypeOf<symbol>();
    expectTypeOf(operator(DEFAULT_DATE)).toEqualTypeOf<Date>();
    expectTypeOf(operator(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<Promise<void>>();
    expectTypeOf(operator(DEFAULT_REGEX)).toEqualTypeOf<RegExp>();
    expectTypeOf(operator([])).toEqualTypeOf<never[]>();
    expectTypeOf(operator(new Set())).toEqualTypeOf<Set<unknown>>();
    expectTypeOf(operator(new Map<unknown, unknown>())).toEqualTypeOf<Map<unknown, unknown>>();
    expectTypeOf(operator({})).toEqualTypeOf<NonNullable<unknown>>();
    expectTypeOf(operator(anonymousArrowFn)).toEqualTypeOf<() => void>();
    expectTypeOf(operator(anonymousFn)).toEqualTypeOf<() => void>();
  });
});
