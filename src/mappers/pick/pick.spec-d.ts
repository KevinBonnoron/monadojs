import { describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { pick } from './pick';

describe('pick', () => {
  it('should have correct types', () => {
    expectTypeOf(pick('id')(fooBar)).toMatchTypeOf<{ id: number }>();
    expectTypeOf(pick('name')(fooBar)).toMatchTypeOf<{ name: string }>();
    expectTypeOf(pick('birthDate')(fooBar)).toMatchTypeOf<{ birthDate: Date }>();
    expectTypeOf(pick('id', 'name')(fooBar)).toMatchTypeOf<{ id: number; name: string }>();
    expectTypeOf(pick('id', 'name', 'birthDate')(fooBar)).toMatchTypeOf<{ id: number; name: string; birthDate: Date }>();

    // @ts-expect-error
    assertType(pick('id')({ noId: 0 }));
    // @ts-expect-error
    assertType(pick('Id')(fooBar));
  });
});
