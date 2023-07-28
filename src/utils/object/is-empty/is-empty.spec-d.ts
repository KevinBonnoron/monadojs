import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  it('should have correct types', () => {
    expectTypeOf(isEmpty(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty('a')).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(1)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(true)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isEmpty(Nothing)).toEqualTypeOf<boolean>();
  });
});
