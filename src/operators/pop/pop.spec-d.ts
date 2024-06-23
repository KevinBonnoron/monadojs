import { describe, expectTypeOf, it } from 'vitest';
import { EMPTY_ARRAY, EMPTY_MAP, EMPTY_SET } from '../../../tests/test.data';
import { pop } from './pop';

describe('pop', () => {
  it('should have correct types', () => {
    const operator = pop();

    expectTypeOf(operator(EMPTY_ARRAY)).toEqualTypeOf<unknown>();
    expectTypeOf(operator(EMPTY_SET)).toEqualTypeOf<unknown>();
    expectTypeOf(operator(EMPTY_MAP)).toEqualTypeOf<unknown>();
  });
});
