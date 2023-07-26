import { assertType, describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { pick } from './pick';

describe('pick', () => {
  it('should have correct types', () => {
    expectTypeOf(pick('id')(fooBar)).toEqualTypeOf<{ id: number }>();
    expectTypeOf(pick('name')(fooBar)).toEqualTypeOf<{ name: string }>();
    expectTypeOf(pick('birthDate')(fooBar)).toEqualTypeOf<{ birthDate: Date }>();
    expectTypeOf(pick('id', 'name')(fooBar)).toEqualTypeOf<{ id: number; name: string }>();
    expectTypeOf(pick('id', 'name', 'birthDate')(fooBar)).toEqualTypeOf<{ id: number; name: string; birthDate: Date }>();

    // @ts-expect-error id does not exist in passed object
    assertType(pick('id')({ noId: 0 }));
    // @ts-expect-error age does not exist in passed object
    assertType(pick('age')(fooBar));
  });
});
