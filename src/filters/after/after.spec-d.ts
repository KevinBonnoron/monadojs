import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE } from '../../../tests/test.data';
import { after } from './after';

describe('after', () => {
  it('should have correct types', () => {
    expectTypeOf(after(DEFAULT_DATE)(new Date('2020-01-01'))).toEqualTypeOf<boolean>();
    expectTypeOf(after(DEFAULT_DATE)('2020-01-01')).toEqualTypeOf<boolean>();
  });
});
