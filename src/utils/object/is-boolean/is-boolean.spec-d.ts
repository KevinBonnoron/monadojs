import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isBoolean } from './is-boolean';

describe('isBoolean', () => {
  it('should have correct types', () => {
    expectTypeOf(isBoolean(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean('a')).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(1)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(true)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isBoolean(Nothing)).toEqualTypeOf<boolean>();
  });
});
