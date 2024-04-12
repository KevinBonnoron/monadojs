import { assertType, describe, expectTypeOf, it } from 'vitest';
import { type Person, babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { groupBy } from './group-by';

describe('groupBy', () => {
  it('should have correct types', () => {
    const persons = [fooBar, johnDoe, janeDoe, babyDoe];

    expectTypeOf(groupBy('sex')(persons)).toEqualTypeOf<Record<'M' | 'F', Person[]>>();
    expectTypeOf(groupBy((person: Person) => person.sex)(persons)).toEqualTypeOf<Record<'M' | 'F', Person[]>>();

    // @ts-expect-error Id does not exist in passed objects
    assertType(groupBy('Id')(persons));
  });
});
