import { describe, expectTypeOf, it } from 'vitest';
import { get } from './get';

describe('get', () => {
  it('should have correct types', () => {
    const source = {
      a: {
        b: {
          c: 1
        }
      },
      d: [2]
    };

    expectTypeOf(get('a')(source)).toEqualTypeOf<{ b: { c: number } }>();
    expectTypeOf(get('a.b')(source)).toEqualTypeOf<{ c: number }>();
    expectTypeOf(get('a.b.c')(source)).toEqualTypeOf<number>();
    // TODO check for array access get('d[0]')(source)
    //expectTypeOf(get('d[0]')(source)).toEqualTypeOf<number>();
  });
});
