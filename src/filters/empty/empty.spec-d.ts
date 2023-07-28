import { describe, expectTypeOf, it } from 'vitest';
import {
  DEFAULT_DATE,
  DEFAULT_MAYBE,
  DEFAULT_REGEX,
  EMPTY_ARRAY,
  EMPTY_MAP,
  EMPTY_PLAIN_OBJECT,
  EMPTY_RESOLVED_PROMISE,
  EMPTY_SET,
  anonymousArrowFn,
  anonymousFn
} from '../../../tests/test.data';
import { Nothing } from '../../utils';
import { empty } from './empty';

describe('empty', () => {
  it('should have correct types', () => {
    expectTypeOf(empty()(null)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(undefined)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()('a')).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(1)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(true)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(Symbol())).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_RESOLVED_PROMISE)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(DEFAULT_REGEX)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_ARRAY)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_SET)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_MAP)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(EMPTY_PLAIN_OBJECT)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(anonymousArrowFn)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(anonymousFn)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(DEFAULT_MAYBE)).toEqualTypeOf<boolean>();
    expectTypeOf(empty()(Nothing)).toEqualTypeOf<boolean>();
  });
});
