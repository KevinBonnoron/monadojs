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
      d: [
        { e: 'a', f: [2], g: [true] }
      ],
      h: true,
      hi: [
        [
          { j: 3 }
        ]
      ]
    };

    expectTypeOf(get('a')(source)).toEqualTypeOf<{ b: { c: number } }>();
    expectTypeOf(get('a.b')(source)).toEqualTypeOf<{ c: number }>();
    expectTypeOf(get('a.b.c')(source)).toEqualTypeOf<number>();
    expectTypeOf(get('d[0]')(source)).toEqualTypeOf<{ e: string, f: number[], g: boolean[]}>();
    expectTypeOf(get('d[0].e')(source)).toEqualTypeOf<string>();
    expectTypeOf(get('d[0].f')(source)).toEqualTypeOf<number[]>();
    expectTypeOf(get('d[0].g')(source)).toEqualTypeOf<boolean[]>();
    expectTypeOf(get('h')(source)).toEqualTypeOf<boolean>();
    expectTypeOf(get('hi')(source)).toEqualTypeOf<{ j: number }[][]>();
    expectTypeOf(get('hi[0]')(source)).toEqualTypeOf<{ j: number }[]>();
    expectTypeOf(get('hi[0][0]')(source)).toEqualTypeOf<{ j: number }>();
    expectTypeOf(get('z')(source)).toEqualTypeOf<never>();
  });
});
