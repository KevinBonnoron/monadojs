import { describe, expectTypeOf, it } from 'vitest';
import { Builder, createBuilder } from './builder.utils';

interface Dummy {
  a: number;
  b: string;
  c: {
    d: Date;
  };
}

describe('BuilderUtils', () => {
  it('should have correct types', () => {
    const builder = createBuilder<Dummy>();

    expectTypeOf(builder.a).toEqualTypeOf<(value: number) => Builder<Dummy, 'b' | 'c'>>();
    expectTypeOf(builder.a(1)).toEqualTypeOf<Builder<Dummy, 'b' | 'c'>>();
    expectTypeOf(builder.b).toEqualTypeOf<(value: string) => Builder<Dummy, 'a' | 'c'>>();
    expectTypeOf(builder.a(1).b('2')).toEqualTypeOf<Builder<Dummy, 'c'>>();
    expectTypeOf(builder.c).toEqualTypeOf<(value: { d: Date }) => Builder<Dummy, 'a' | 'b'>>();
    expectTypeOf(builder.a(1).b('2').c({ d: new Date() })).toEqualTypeOf<Builder<Dummy, never>>();
    expectTypeOf(builder.a(1).b('2').c({ d: new Date() }).$get()).toEqualTypeOf<Dummy>();
  });
});
