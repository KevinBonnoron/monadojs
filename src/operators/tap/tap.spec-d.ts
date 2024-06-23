import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_PERSON_MAP, PERSON_ARRAY, PERSON_SET, type Person } from '../../../tests/test.data';
import { tap } from './tap';

describe('tap', () => {
  it('should have correct types', () => {
    const fn = () => {
      return 1;
    };
    const operator = tap(fn);

    expectTypeOf(operator(PERSON_ARRAY)).toEqualTypeOf<Person[]>();
    expectTypeOf(operator(PERSON_SET)).toEqualTypeOf<Set<Person>>();
    expectTypeOf(operator(NUMBER_PERSON_MAP)).toEqualTypeOf<Map<number, Person>>();
  });
});
