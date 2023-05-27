import { describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { exclude } from './exclude';

describe('exclude', () => {
  it('should have correct types', () => {
    expectTypeOf(exclude('id')(fooBar)).toMatchTypeOf<{ name: string; birthDate: Date }>();
    expectTypeOf(exclude('name')(fooBar)).toMatchTypeOf<{ id: number; birthDate: Date }>();
    expectTypeOf(exclude('birthDate')(fooBar)).toMatchTypeOf<{ id: number; name: string }>();
    expectTypeOf(exclude('id', 'name')(fooBar)).toMatchTypeOf<{ birthDate: Date }>();
    expectTypeOf(exclude('id', 'name', 'birthDate')(fooBar)).toMatchTypeOf<{}>();

    // @ts-expect-error
    assertType(exclude('id')({ noId: 0 }));
    // @ts-expect-error
    assertType(exclude('Id')(fooBar));
  });
});
