import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import type { Maybe } from '../../types';
import { Nothing } from '../../utils';
import { walk } from './walk';

describe('walk', () => {
  it('should have correct types', () => {
    const operator = walk(() => {});

    expectTypeOf(operator(undefined)).toEqualTypeOf<undefined>();
    expectTypeOf(operator('a')).toEqualTypeOf<string>();
    expectTypeOf(operator(1)).toEqualTypeOf<number>();
    expectTypeOf(operator(true)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(Symbol())).toEqualTypeOf<symbol>();
    expectTypeOf(operator(DEFAULT_DATE)).toEqualTypeOf<Date>();
    expectTypeOf(operator(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<Promise<void>>();
    expectTypeOf(operator(DEFAULT_REGEX)).toEqualTypeOf<RegExp>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<unknown[]>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<Set<unknown>>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<Map<unknown, unknown>>();
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<{}>();
    expectTypeOf(operator(anonymousArrowFn)).toEqualTypeOf<() => void>();
    expectTypeOf(operator(anonymousFn)).toEqualTypeOf<() => void>();
    expectTypeOf(operator(DEFAULT_MAYBE)).toEqualTypeOf<Maybe<number>>();
    expectTypeOf(operator(Nothing)).toEqualTypeOf<Maybe<null>>();
  });
});
