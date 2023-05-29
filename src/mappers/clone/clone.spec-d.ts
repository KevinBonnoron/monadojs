import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_RESOLVED_PROMISE, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { nil } from '../../types';
import { clone } from './clone';

describe('clone', () => {
  it('should have correct types', () => {
    expectTypeOf(clone()(null)).toMatchTypeOf<null>();
    expectTypeOf(clone()(undefined)).toMatchTypeOf<undefined>();
    expectTypeOf(clone()(nil)).toMatchTypeOf<nil>();
    expectTypeOf(clone()('a')).toMatchTypeOf<string>();
    expectTypeOf(clone()(1.0)).toMatchTypeOf<number>();
    expectTypeOf(clone()(true)).toMatchTypeOf<boolean>();
    expectTypeOf(clone()(DEFAULT_SYMBOL)).toMatchTypeOf<symbol>();
    expectTypeOf(clone()(DEFAULT_DATE)).toMatchTypeOf<Date>();
    expectTypeOf(clone()(EMPTY_RESOLVED_PROMISE)).toMatchTypeOf<Promise<unknown>>();
    expectTypeOf(clone()(DEFAULT_REGEX)).toMatchTypeOf<RegExp>();
    expectTypeOf(clone()([])).toMatchTypeOf<Array<unknown>>();
    expectTypeOf(clone()(new Set())).toMatchTypeOf<Set<unknown>>();
    expectTypeOf(clone()(new Map())).toMatchTypeOf<Map<unknown, unknown>>();
    expectTypeOf(clone()({})).toMatchTypeOf<object>();
    expectTypeOf(clone()(anonymousArrowFn)).toMatchTypeOf<Function>();
    expectTypeOf(clone()(anonymousFn)).toMatchTypeOf<Function>();
  });
});
