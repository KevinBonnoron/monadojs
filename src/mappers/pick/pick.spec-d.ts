import { expectTypeOf, test } from 'vitest';
import { person } from '../../../tests/test.data';
import { pick } from './pick';

test('that types works properly', () => {
  expectTypeOf(pick('id')(person)).toMatchTypeOf<{ id: number }>();
  expectTypeOf(pick('name')(person)).toMatchTypeOf<{ name: string }>();
  expectTypeOf(pick('birthDate')(person)).toMatchTypeOf<{ birthDate: Date }>();
  expectTypeOf(pick('id', 'name')(person)).toMatchTypeOf<{ id: number; name: string }>();
  expectTypeOf(pick('id', 'name', 'birthDate')(person)).toMatchTypeOf<{ id: number; name: string; birthDate: Date }>();

  // @ts-expect-error
  assertType(pick('id')({ noId: 0 }));
  // @ts-expect-error
  assertType(pick('Id')(person));
});
