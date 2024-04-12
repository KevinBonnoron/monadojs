import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_MAYBE, DEFAULT_REGEX, EMPTY_ARRAY, EMPTY_MAP, EMPTY_PLAIN_OBJECT, EMPTY_RESOLVED_PROMISE, EMPTY_SET, anonymousArrowFn, anonymousFn } from '../../../tests/test.data';
import { Nothing } from '../../utils';
import { endsWith } from './ends-with';

describe('endsWith', () => {
  it('should have correct types', () => {
    const operator = endsWith('a');

    expectTypeOf(operator(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(operator('a')).toEqualTypeOf<boolean>();
    expectTypeOf(operator(1)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(true)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(operator(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(operator(Nothing)).toEqualTypeOf<boolean>();
  });
});
