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
    expectTypeOf(endsWith('a')(undefined)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')('a')).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(1)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(true)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Symbol())).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(DEFAULT_DATE)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_RESOLVED_PROMISE)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(DEFAULT_REGEX)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_ARRAY)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_SET)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_MAP)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(EMPTY_PLAIN_OBJECT)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(anonymousArrowFn)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(anonymousFn)).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Just(1))).toMatchTypeOf<boolean>();
    expectTypeOf(endsWith('a')(Nothing)).toMatchTypeOf<boolean>();
  });
});
