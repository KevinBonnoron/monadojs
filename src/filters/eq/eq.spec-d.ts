import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { Nothing } from '../../utils';
import { eq } from './eq';

describe('eq', () => {
  it('should have correct types', () => {
    expectTypeOf(eq('a')(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')('a')).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(1)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(true)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(eq('a')(Nothing)).toEqualTypeOf<boolean>();
  });
});
