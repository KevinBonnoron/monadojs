import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET, PERSON_ARRAY, PERSON_SET, Person, STRING_PERSON_MAP } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  it('should have correct types', () => {
    const filterPersonByFn = filter<Person>((person) => person.id > 0);
    const filterPersonByObjectFilterType = filter({ id: { $gt: 0 } });
    const filterNumberByFn = filter<number>((value) => value > 0);
    const filterNumberByObjectFilterType = filter<number>({ $gt: 0 });

    expectTypeOf(filterPersonByFn(PERSON_ARRAY)).toEqualTypeOf<Person[]>();
    expectTypeOf(filterPersonByObjectFilterType(PERSON_ARRAY)).toEqualTypeOf<Person[]>();
    expectTypeOf(filterNumberByFn(NUMBER_ARRAY)).toEqualTypeOf<number[]>();
    expectTypeOf(filterNumberByObjectFilterType(NUMBER_ARRAY)).toEqualTypeOf<number[]>();

    expectTypeOf(filterPersonByFn(PERSON_SET)).toEqualTypeOf<Set<Person>>();
    expectTypeOf(filterPersonByObjectFilterType(PERSON_SET)).toEqualTypeOf<Set<Person>>();
    expectTypeOf(filterNumberByFn(NUMBER_SET)).toEqualTypeOf<Set<number>>();
    expectTypeOf(filterNumberByObjectFilterType(NUMBER_SET)).toEqualTypeOf<Set<number>>();

    expectTypeOf(filterPersonByFn(STRING_PERSON_MAP)).toEqualTypeOf<Map<string, Person>>();
    expectTypeOf(filterPersonByObjectFilterType(STRING_PERSON_MAP)).toEqualTypeOf<Map<string, Person>>();
    expectTypeOf(filterNumberByFn(NUMBER_MAP)).toEqualTypeOf<Map<number, number>>();
    expectTypeOf(filterNumberByObjectFilterType(NUMBER_MAP)).toEqualTypeOf<Map<number, number>>();
  });
});
