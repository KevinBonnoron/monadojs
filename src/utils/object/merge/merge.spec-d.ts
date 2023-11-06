import { describe, expectTypeOf, it } from 'vitest';
import { merge } from './merge';

describe('map', () => {
  it('should have correct types', () => {
    expectTypeOf(merge({}, {})).toEqualTypeOf({});
    expectTypeOf(merge([], [])).toEqualTypeOf([]);
  });
});
