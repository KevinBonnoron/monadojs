import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY } from '../../../tests/test.data';
import { median } from './median';

describe('median', () => {
  it('should have correct types', () => {
    const operator = median();
    expectTypeOf(NUMBER_ARRAY.reduce(operator)).toEqualTypeOf<number>();
  });
});
