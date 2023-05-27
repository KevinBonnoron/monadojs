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
import { empty } from './empty';

describe('empty', () => {
  it('should have correct types', () => {
    expectTypeOf(empty()(null)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(undefined)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()('a')).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(1)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(true)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(Symbol())).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(DEFAULT_DATE)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_RESOLVED_PROMISE)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(DEFAULT_REGEX)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_ARRAY)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_SET)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_MAP)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_PLAIN_OBJECT)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(anonymousArrowFn)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(anonymousFn)).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(Just(1))).toMatchTypeOf<boolean>();
    expectTypeOf(empty()(Nothing)).toMatchTypeOf<boolean>();
  });
});
