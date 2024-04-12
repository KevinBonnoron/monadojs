import { describe, expectTypeOf, it } from 'vitest';
import { DEFAULT_DATE } from '../../../tests/test.data';
import { after } from './after';

describe('after', () => {
  it('should have correct types', () => {
    const operator = after(DEFAULT_DATE);

    expectTypeOf(operator(new Date('2020-01-01'))).toEqualTypeOf<boolean>();
    expectTypeOf(operator('2020-01-01')).toEqualTypeOf<boolean>();
  });
});
