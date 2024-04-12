import { describe, expectTypeOf, it } from 'vitest';
import { type Person, fooBar } from '../../../tests/test.data';
import { exclude } from './exclude';

describe('exclude', () => {
  it('should have correct types', () => {
    expectTypeOf(exclude('id')(fooBar)).toEqualTypeOf<Omit<Person, 'id'>>();
    expectTypeOf(exclude('name')(fooBar)).toEqualTypeOf<Omit<Person, 'name'>>();
    expectTypeOf(exclude('birthDate')(fooBar)).toEqualTypeOf<Omit<Person, 'birthDate'>>();
    expectTypeOf(exclude('sex')(fooBar)).toEqualTypeOf<Omit<Person, 'sex'>>();
    expectTypeOf(exclude('id', 'name')(fooBar)).toEqualTypeOf<Omit<Person, 'id' | 'name'>>();
    expectTypeOf(exclude('id', 'name', 'birthDate')(fooBar)).toEqualTypeOf<Omit<Person, 'id' | 'name' | 'birthDate'>>();
    expectTypeOf(exclude('id', 'name', 'birthDate', 'sex')(fooBar)).toEqualTypeOf<Omit<Person, 'id' | 'name' | 'birthDate' | 'sex'>>();

    // @ts-expect-error id does not exist in passed object
    assertType(exclude('id')({ noId: 0 }));
    // @ts-expect-error Id does not exist in passed object
    assertType(exclude('Id')(fooBar));
  });
});
