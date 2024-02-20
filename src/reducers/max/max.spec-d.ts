import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY, STRING_ARRAY } from '../../../tests/test.data';
import { max } from './max';

describe('max', () => {
  it('should have correct types', () => {
    const operator = max();
    expectTypeOf(NUMBER_ARRAY.reduce(operator)).toEqualTypeOf<number>();
    expectTypeOf(STRING_ARRAY.reduce(operator)).toEqualTypeOf<string>();
  });
});
