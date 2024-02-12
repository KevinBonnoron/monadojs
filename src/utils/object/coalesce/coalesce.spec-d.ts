import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_SYMBOL, EMPTY_ARRAY, EMPTY_PLAIN_OBJECT } from '../../../../tests/test.data';
import { nil } from '../../../types';
import { coalesce } from './coalesce';

describe('coalesce', () => {
  it('should have correct types', () => {
    expectTypeOf(coalesce(null, undefined, 0, 'a', false, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<number>();
    expectTypeOf(coalesce(null, undefined, nil, 'a', false, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<string>();
    expectTypeOf(coalesce(null, undefined, nil, nil, false, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<boolean>();
    expectTypeOf(coalesce(null, undefined, nil, nil, nil, DEFAULT_SYMBOL, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<symbol>();
    expectTypeOf(coalesce(null, undefined, nil, nil, nil, nil, EMPTY_PLAIN_OBJECT, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<typeof EMPTY_PLAIN_OBJECT>();
    expectTypeOf(coalesce(null, undefined, nil, nil, nil, nil, nil, EMPTY_ARRAY, DEFAULT_DATE)).toEqualTypeOf<unknown[]>();
    expectTypeOf(coalesce(null, undefined, nil, nil, nil, nil, nil, nil, DEFAULT_DATE)).toEqualTypeOf<Date>();
    expectTypeOf(coalesce(null)).toEqualTypeOf<never>();
  });
});
