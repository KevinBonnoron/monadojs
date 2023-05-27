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

    expectTypeOf(get('a')(source)).toMatchTypeOf<{ b: { c: number } }>();
    expectTypeOf(get('a.b')(source)).toMatchTypeOf<{ c: number }>();
    expectTypeOf(get('a.b.c')(source)).toMatchTypeOf<number>();
    // TODO check for array access get('d[0]')(source)
    //expectTypeOf(get('d[0]')(source)).toMatchTypeOf<number>();
  });
});
