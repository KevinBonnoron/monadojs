import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isArray } from './is-array';

describe('isArray', () => {
  it('should have correct types', () => {
    expectTypeOf(isArray(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray('a')).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(1)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(true)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isArray(Nothing)).toEqualTypeOf<boolean>();
  });
});
