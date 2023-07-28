import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isDate } from './is-date';

describe('isDate', () => {
  it('should have correct types', () => {
    expectTypeOf(isDate(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate('a')).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(1)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(true)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isDate(Nothing)).toEqualTypeOf<boolean>();
  });
});
