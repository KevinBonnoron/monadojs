import { expectTypeOf, test } from 'vitest';
import { person } from '../../../tests/test.data';
import { pipe } from '../../operators/pipe/pipe';
import { prop } from './prop';

test('that types works properly', () => {
  // id
  expectTypeOf(prop('id')(person)).toMatchTypeOf<number>();
  expectTypeOf(prop('id')(person)).toMatchTypeOf<number>();
  expectTypeOf(pipe(prop('id'))(person)).toMatchTypeOf<number>();
  // @ts-expect-error
  assertType(prop('id')({ noId: 0 }));

  // name
  expectTypeOf(prop('name')(person)).toMatchTypeOf<string>();
  expectTypeOf(prop('name')(person)).toMatchTypeOf<string>();
  expectTypeOf(pipe(prop('name'))(person)).toMatchTypeOf<string>();
  // @ts-expect-error
  assertType(prop('name')({ noName: '' }));

  // birthDate
  expectTypeOf(prop('birthDate')(person)).toMatchTypeOf<Date>();
  expectTypeOf(prop('birthDate')(person)).toMatchTypeOf<Date>();
  expectTypeOf(pipe(prop('birthDate'))(person)).toMatchTypeOf<Date>();
  // @ts-expect-error
  assertType(prop('birthDate')({ noBirthDate: new Date() }));

  // @ts-expect-error
  assertType(prop('name')([]));
  // @ts-expect-error
  assertType(prop('name')(new Map()));
  // @ts-expect-error
  assertType(prop('name')(new Set()));
  // @ts-expect-error
  assertType(prop('name')(new Date()));
});
