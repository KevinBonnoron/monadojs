import { describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { pipe } from '../../operators/pipe/pipe';
import { prop } from './prop';

describe('prop', () => {
  it('should have correct types', () => {
    // id
    expectTypeOf(prop('id')(fooBar)).toMatchTypeOf<number>();
    expectTypeOf(prop('id')(fooBar)).toMatchTypeOf<number>();
    expectTypeOf(pipe(prop('id'))(fooBar)).toMatchTypeOf<number>();
    // @ts-expect-error
    assertType(prop('id')({ noId: 0 }));

    // name
    expectTypeOf(prop('name')(fooBar)).toMatchTypeOf<string>();
    expectTypeOf(prop('name')(fooBar)).toMatchTypeOf<string>();
    expectTypeOf(pipe(prop('name'))(fooBar)).toMatchTypeOf<string>();
    // @ts-expect-error
    assertType(prop('name')({ noName: '' }));

    // birthDate
    expectTypeOf(prop('birthDate')(fooBar)).toMatchTypeOf<Date>();
    expectTypeOf(prop('birthDate')(fooBar)).toMatchTypeOf<Date>();
    expectTypeOf(pipe(prop('birthDate'))(fooBar)).toMatchTypeOf<Date>();
    // @ts-expect-error
    assertType(prop('birthDate')({ noBirthDate: DEFAULT_DATE }));

    // @ts-expect-error
    assertType(prop('name')([]));
    // @ts-expect-error
    assertType(prop('name')(new Map()));
    // @ts-expect-error
    assertType(prop('name')(new Set()));
    // @ts-expect-error
    assertType(prop('name')(DEFAULT_DATE));
  });
});
