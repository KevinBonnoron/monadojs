import { describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { exclude } from './exclude';

describe('exclude', () => {
  it('should have correct types', () => {
    expectTypeOf(exclude('id')(fooBar)).toEqualTypeOf<{ name: string; birthDate: Date }>();
    expectTypeOf(exclude('name')(fooBar)).toEqualTypeOf<{ id: number; birthDate: Date }>();
    expectTypeOf(exclude('birthDate')(fooBar)).toEqualTypeOf<{ id: number; name: string }>();
    expectTypeOf(exclude('id', 'name')(fooBar)).toEqualTypeOf<{ birthDate: Date }>();
    expectTypeOf(exclude('id', 'name', 'birthDate')(fooBar)).toEqualTypeOf<object>();

    // @ts-expect-error id does not exist in passed object
    assertType(exclude('id')({ noId: 0 }));
    // @ts-expect-error Id does not exist in passed object
    assertType(exclude('Id')(fooBar));
  });
});
