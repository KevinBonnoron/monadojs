import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_SET } from '../../../tests/test.data';
import { unique } from './unique';

describe('unique', () => {
  it('should have correct types', () => {
    const operator = unique();

    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<unknown[]>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<Set<unknown>>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<Map<unknown, unknown>>();
  });
});
