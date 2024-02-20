import { describe, expectTypeOf, it } from 'vitest';
import { iif } from './iif';

describe('iif', () => {
  it('should have correct types', () => {
    const operator = iif(
      (value) => value === true,
      () => 'a',
      () => 1,
    );

    expectTypeOf(operator(false)).toEqualTypeOf<string | number>();
  });
});
