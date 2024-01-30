import { describe, expectTypeOf, it } from 'vitest';
import { babyDoe, fooBar, janeDoe, johnDoe } from '../../../tests/test.data';
import { string } from '../../wrappers';
import { map } from './map';

describe('map', () => {
  it('should have correct types', () => {
    const mapByFn = map((person) => ({ name: person.name }));
    const mapByObjectMapperType = map({ name: string.toUpperCase() });
    const mapByProperty = map('name');
    
    const personArray = [fooBar, johnDoe, janeDoe, babyDoe];
    expectTypeOf(mapByFn(personArray)).toEqualTypeOf<{ name: any}[]>();
    expectTypeOf(mapByObjectMapperType(personArray)).toEqualTypeOf<{ name: string }[]>();
    expectTypeOf(mapByProperty(personArray)).toEqualTypeOf<string[]>();

    const personSet = new Set([fooBar, johnDoe, janeDoe, babyDoe]);
    expectTypeOf(mapByFn(personSet)).toEqualTypeOf<Set<{ name: any}>>();
    expectTypeOf(mapByObjectMapperType(personSet)).toEqualTypeOf<Set<{ name: string }>>();
    expectTypeOf(mapByProperty(personSet)).toEqualTypeOf<Set<string>>();

    const personMap = new Map([[fooBar.name, fooBar], [johnDoe.name, johnDoe], [janeDoe.name, janeDoe], [babyDoe.name, babyDoe]]);    
    expectTypeOf(mapByFn(personMap)).toEqualTypeOf<Map<string, { name: any}>>();
    expectTypeOf(mapByObjectMapperType(personMap)).toEqualTypeOf<Map<string, { name: string }>>();
    expectTypeOf(mapByProperty(personMap)).toEqualTypeOf<Map<string, string>>();
  });
});
