import { describe, expectTypeOf, it } from 'vitest';
import { fooBar } from '../../../tests/test.data';
import { pipe } from '../../operators/pipe/pipe';
import { prop } from './prop';

describe('prop', () => {
  it('should have correct types', () => {
    // id
    expectTypeOf(prop('id')(fooBar)).toEqualTypeOf<number>();
    expectTypeOf(prop('id')(fooBar)).toEqualTypeOf<number>();
    expectTypeOf(pipe(prop('id'))(fooBar)).toEqualTypeOf<number>();
    // @ts-expect-error id should be present in passed source
    assertType(prop('id')({ noId: 0 }));

    // name
    expectTypeOf(prop('name')(fooBar)).toEqualTypeOf<string>();
    expectTypeOf(prop('name')(fooBar)).toEqualTypeOf<string>();
    expectTypeOf(pipe(prop('name'))(fooBar)).toEqualTypeOf<string>();
    // @ts-expect-error name should be present in passed source
    assertType(prop('name')({ noName: '' }));

    // birthDate
    expectTypeOf(prop('birthDate')(fooBar)).toEqualTypeOf<Date>();
    expectTypeOf(prop('birthDate')(fooBar)).toEqualTypeOf<Date>();
    expectTypeOf(pipe(prop('birthDate'))(fooBar)).toEqualTypeOf<Date>();
    // @ts-expect-error birthDate should be present in passed source
    assertType(prop('birthDate')({ noBirthDate: DEFAULT_DATE }));

    // @ts-expect-error name should be present in passed source
    assertType(prop('name')([]));
    // @ts-expect-error name should be present in passed source
    assertType(prop('name')(new Map()));
    // @ts-expect-error name should be present in passed source
    assertType(prop('name')(new Set()));
    // @ts-expect-error name should be present in passed source
    assertType(prop('name')(DEFAULT_DATE));
  });
});
