import { expectTypeOf, test } from 'vitest';
import { person } from '../../../tests/test.data';
import { exclude } from './exclude';

test('that types works properly', () => {
  expectTypeOf(exclude('id')(person)).toMatchTypeOf<{ name: string; birthDate: Date }>();
  expectTypeOf(exclude('name')(person)).toMatchTypeOf<{ id: number; birthDate: Date }>();
  expectTypeOf(exclude('birthDate')(person)).toMatchTypeOf<{ id: number; name: string }>();
  expectTypeOf(exclude('id', 'name')(person)).toMatchTypeOf<{ birthDate: Date }>();
  expectTypeOf(exclude('id', 'name', 'birthDate')(person)).toMatchTypeOf<{}>();

  // @ts-expect-error
  assertType(exclude('id')({ noId: 0 }));
  // @ts-expect-error
  assertType(exclude('Id')(person));
});
