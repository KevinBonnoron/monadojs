import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE } from '../../../tests/test.data';
import { before } from './before';

describe('before', () => {
  it('should have correct types', () => {
    expectTypeOf(before(DEFAULT_DATE)(new Date('2020-01-01'))).toEqualTypeOf<boolean>();
    expectTypeOf(before(DEFAULT_DATE)('2020-01-01')).toEqualTypeOf<boolean>();
  });
});
