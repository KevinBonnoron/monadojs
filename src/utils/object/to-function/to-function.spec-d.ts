import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import type { Maybe } from '../../../types';
import { Nothing } from '../../maybe/maybe.utils';
import { toFunction } from './to-function';

describe('toFunction', () => {
  it('should have correct types', () => {
    expectTypeOf(toFunction(null)).toEqualTypeOf<() => null>();
    expectTypeOf(toFunction(undefined)).toEqualTypeOf<() => undefined>();
    expectTypeOf(toFunction('a')).toEqualTypeOf<() => string>();
    expectTypeOf(toFunction(0)).toEqualTypeOf<() => number>();
    expectTypeOf(toFunction(true)).toEqualTypeOf<() => boolean>();
    expectTypeOf(toFunction(DEFAULT_SYMBOL)).toEqualTypeOf<() => symbol>();
    expectTypeOf(toFunction(DEFAULT_DATE)).toEqualTypeOf<() => Date>();
    expectTypeOf(toFunction(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<() => Promise<void>>();
    expectTypeOf(toFunction(DEFAULT_REGEX)).toEqualTypeOf<() => RegExp>();
    expectTypeOf(toFunction(NUMBER_ARRAY)).toEqualTypeOf<() => number[]>();
    expectTypeOf(toFunction(NUMBER_SET)).toEqualTypeOf<() => Set<number>>();
    expectTypeOf(toFunction(NUMBER_MAP)).toEqualTypeOf<() => Map<number, number>>();
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    expectTypeOf(toFunction(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<() => {}>();
    expectTypeOf(toFunction(anonymousArrowFn)).toEqualTypeOf<() => () => void>();
    expectTypeOf(toFunction(anonymousFn)).toEqualTypeOf<() => () => void>();
    expectTypeOf(toFunction(DEFAULT_MAYBE)).toEqualTypeOf<() => Maybe<number>>();
    expectTypeOf(toFunction(Nothing)).toEqualTypeOf<() => Maybe<null>>();
  });
});
