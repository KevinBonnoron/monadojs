import { describe, expectTypeOf, it } from 'vitest';
import { throwError } from './throw-error';

describe('throwError', () => {
  it('should have correct types', () => {
    const operator = throwError(new Error());

    expectTypeOf(operator()).toEqualTypeOf<never>();
  });
});
