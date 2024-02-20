import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY, STRING_ARRAY } from '../../../tests/test.data';
import { min } from './min';

describe('min', () => {
  it('should have correct types', () => {
    const operator = min();
    expectTypeOf(NUMBER_ARRAY.reduce(operator)).toEqualTypeOf<number>();
    expectTypeOf(STRING_ARRAY.reduce(operator)).toEqualTypeOf<string>();
  });
});
