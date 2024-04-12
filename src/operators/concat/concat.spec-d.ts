import { describe, expectTypeOf, it } from 'vitest';
import type { Collection } from '../../types';
import { concat } from './concat';

describe('concat', () => {
  it('should have correct types', () => {
    const operator = concat(1);

    expectTypeOf(operator([2])).toEqualTypeOf<Collection>();
  });
});
