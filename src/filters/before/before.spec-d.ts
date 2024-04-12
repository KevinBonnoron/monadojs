import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE } from '../../../tests/test.data';
import { before } from './before';

describe('before', () => {
  it('should have correct types', () => {
    const operator = before(DEFAULT_DATE);

    expectTypeOf(operator(new Date('2020-01-01'))).toEqualTypeOf<boolean>();
    expectTypeOf(operator('2020-01-01')).toEqualTypeOf<boolean>();
  });
});
