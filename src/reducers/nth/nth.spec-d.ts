import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY, PERSON_ARRAY, Person, STRING_ARRAY } from '../../../tests/test.data';
import { nth } from './nth';

describe('nth', () => {
  it('should have correct types', () => {
    const operator = nth(1);
    expectTypeOf(NUMBER_ARRAY.reduce(operator)).toEqualTypeOf<number>();
    expectTypeOf(STRING_ARRAY.reduce(operator)).toEqualTypeOf<string>();
    expectTypeOf(PERSON_ARRAY.reduce(operator)).toEqualTypeOf<Person>();
  });
});
