import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_RESOLVED_PROMISE, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { nil } from '../../types';
import { clone } from './clone';

describe('clone', () => {
  it('should have correct types', () => {
    expectTypeOf(clone()(null)).toEqualTypeOf<null>();
    expectTypeOf(clone()(undefined)).toEqualTypeOf<undefined>();
    expectTypeOf(clone()(nil)).toEqualTypeOf<nil>();
    expectTypeOf(clone()('a')).toEqualTypeOf<string>();
    expectTypeOf(clone()(1.0)).toEqualTypeOf<number>();
    expectTypeOf(clone()(true)).toEqualTypeOf<boolean>();
    expectTypeOf(clone()(DEFAULT_SYMBOL)).toEqualTypeOf<symbol>();
    expectTypeOf(clone()(DEFAULT_DATE)).toEqualTypeOf<Date>();
    expectTypeOf(clone()(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<Promise<void>>();
    expectTypeOf(clone()(DEFAULT_REGEX)).toEqualTypeOf<RegExp>();
    expectTypeOf(clone()([])).toEqualTypeOf<never[]>();
    expectTypeOf(clone()(new Set())).toEqualTypeOf<Set<unknown>>();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expectTypeOf(clone()(new Map())).toEqualTypeOf<Map<any, any>>();
    expectTypeOf(clone()({})).toEqualTypeOf<NonNullable<unknown>>();
    expectTypeOf(clone()(anonymousArrowFn)).toEqualTypeOf<() => void>();
    expectTypeOf(clone()(anonymousFn)).toEqualTypeOf<() => void>();
  });
});
