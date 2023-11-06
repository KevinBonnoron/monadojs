import { describe, expectTypeOf, it } from 'vitest';
import { NUMBER_OBJECT_MAP, OBJECT_ARRAY, OBJECT_SET, Person } from '../../../tests/test.data';
import { tap } from './tap';

describe('tap', () => {
  it('should have correct types', () => {
    const fn = () => { return 1; };
    const operator = tap(fn);

    expectTypeOf(operator(OBJECT_ARRAY)).toEqualTypeOf<Person[]>();
    expectTypeOf(operator(OBJECT_SET)).toEqualTypeOf<Set<Person>>();
    expectTypeOf(operator(NUMBER_OBJECT_MAP)).toEqualTypeOf<Map<number, Person>>();
  });
});
