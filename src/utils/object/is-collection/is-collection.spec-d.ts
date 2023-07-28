import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isCollection } from './is-collection';

describe('isCollection', () => {
  it('should have correct types', () => {
    expectTypeOf(isCollection(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection('a')).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(1)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(true)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(isCollection(Nothing)).toEqualTypeOf<boolean>();
  });
});
