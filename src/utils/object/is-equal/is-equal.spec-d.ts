import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isEqual } from './is-equal';

describe('isEqual', () => {
  it('should have correct types', () => {
    expectTypeOf(isEqual(undefined, undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual('a', 'a')).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(1, 1)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(true, true)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(Symbol(), Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(DEFAULT_DATE, DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(EMPTY_RESOLVED_PROMISE, EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(DEFAULT_REGEX, DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(EMPTY_ARRAY, EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(EMPTY_SET, EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(EMPTY_MAP, EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(EMPTY_PLAIN_OBJECT, EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(anonymousArrowFn, anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(anonymousFn, anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(DEFAULT_MAYBE, DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEqual(Nothing, Nothing)).toEqualTypeOf<boolean>();
  });
});
