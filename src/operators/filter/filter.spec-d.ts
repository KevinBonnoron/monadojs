import { describe, expectTypeOf, it } from 'vitest';
import { Person, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { filter } from './filter';

describe('filter', () => {
  it('should have correct types', () => {
    const filterByProperty = filter({ id: { $gt: 0 } });
    const filterByFn = filter((person) => person.id > 0);

    const personArray = [fooBar, johnDoe, janeDoe, babyDoe];
    expectTypeOf(filterByProperty(personArray)).toEqualTypeOf<Person[]>();
    expectTypeOf(filterByFn(personArray)).toEqualTypeOf<Person[]>();

    const personSet = new Set([fooBar, johnDoe, janeDoe, babyDoe]);
    expectTypeOf(filterByProperty(personSet)).toEqualTypeOf<Set<Person>>();
    expectTypeOf(filterByFn(personSet)).toEqualTypeOf<Set<Person>>();

    const personMap = new Map([[fooBar.name, fooBar], [johnDoe.name, johnDoe], [janeDoe.name, janeDoe], [babyDoe.name, babyDoe]]);
    expectTypeOf(filterByProperty(personMap)).toEqualTypeOf<Map<string, Person>>();
    expectTypeOf(filterByFn(personMap)).toEqualTypeOf<Map<string, Person>>();
  });
});
