import { describe, expectTypeOf, it } from 'vitest';
import { Person, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { find } from './find';

describe('find', () => {
  it('should have correct types', () => {
    const findByProperty = find({ id: { $gt: 0 } });
    const findByFn = find((person) => person.id > 0);

    const personArray = [fooBar, johnDoe, janeDoe, babyDoe];
    const personSet = new Set([fooBar, johnDoe, janeDoe, babyDoe]);
    const personMap = new Map([[fooBar.name, fooBar], [johnDoe.name, johnDoe], [janeDoe.name, janeDoe], [babyDoe.name, babyDoe]]);

    expectTypeOf(findByProperty(personArray)).toEqualTypeOf<Person>();
    expectTypeOf(findByProperty(personSet)).toEqualTypeOf<Person>();
    expectTypeOf(findByProperty(personMap)).toEqualTypeOf<Person>();

    expectTypeOf(findByFn(personArray)).toEqualTypeOf<Person>();
    expectTypeOf(findByFn(personSet)).toEqualTypeOf<Person>();
    expectTypeOf(findByFn(personMap)).toEqualTypeOf<Person>();
  });
});
