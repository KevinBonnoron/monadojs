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
import { eq } from './eq';

describe('eq', () => {
  it('should have correct types', () => {
    expectTypeOf(eq('a')(undefined)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')('a')).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(1)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(true)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(Symbol())).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(DEFAULT_DATE)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_RESOLVED_PROMISE)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(DEFAULT_REGEX)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_ARRAY)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_SET)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_MAP)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(EMPTY_PLAIN_OBJECT)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(anonymousArrowFn)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(anonymousFn)).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(Just(1))).toMatchTypeOf<boolean>();
    expectTypeOf(eq('a')(Nothing)).toMatchTypeOf<boolean>();
  });
});
