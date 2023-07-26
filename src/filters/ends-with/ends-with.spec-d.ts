import { describe, expectTypeOf, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_REGEX,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../tests/test.data';
import { Just, Nothing } from '../../utils';
import { endsWith } from './ends-with';

describe('endsWith', () => {
  it('should have correct types', () => {
    expectTypeOf(endsWith('a')(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')('a')).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(1)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(true)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Just(1))).toEqualTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Nothing)).toEqualTypeOf<boolean>();
  });
});
