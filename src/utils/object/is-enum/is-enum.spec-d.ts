import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../../tests/test.data';
import { Nothing } from '../../maybe/maybe.utils';
import { isEnum } from './is-enum';

describe('isEnum', () => {
  it('should have correct types', () => {
    enum Dummy {}

    expectTypeOf(isEnum(undefined, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum('a', Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(1, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(true, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(Symbol(), Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(DEFAULT_DATE, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(EMPTY_RESOLVED_PROMISE, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(DEFAULT_REGEX, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(EMPTY_ARRAY, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(EMPTY_SET, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(EMPTY_MAP, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(EMPTY_PLAIN_OBJECT, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(anonymousArrowFn, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(anonymousFn, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(DEFAULT_MAYBE, Dummy)).toEqualTypeOf<boolean>();
    expectTypeOf(isEnum(Nothing, Dummy)).toEqualTypeOf<boolean>();
  });
});
