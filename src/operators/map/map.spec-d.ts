import { describe, expectTypeOf, it } from 'vitest';
import { babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { map } from './map';

describe('map', () => {
  it('should have correct types', () => {
    const operator = map((person) => ({ name: person.name }));

    const personArray = [fooBar, johnDoe, janeDoe, babyDoe];
    const personSet = new Set([fooBar, johnDoe, janeDoe, babyDoe]);
    const personMap = new Map([[fooBar.name, fooBar], [johnDoe.name, johnDoe], [janeDoe.name, janeDoe], [babyDoe.name, babyDoe]]);

    // TODO find a way to infer the actual type into the mapper function
    expectTypeOf(operator(personArray)).toEqualTypeOf<{ name: any}[]>();
    expectTypeOf(operator(personSet)).toEqualTypeOf<Set<{ name: any}>>();
    expectTypeOf(operator(personMap)).toEqualTypeOf<Map<string, { name: any}>>();
  });
});
