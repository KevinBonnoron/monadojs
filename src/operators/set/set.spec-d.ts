import { describe, expectTypeOf, it } from 'vitest';
import { set } from './set';

describe('set', () => {
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

    expectTypeOf(set('a', { b: { c: 1 } })(source)).toEqualTypeOf<void>();
    expectTypeOf(set('a.b', { c: 1 })(source)).toEqualTypeOf<void>();
    expectTypeOf(set('a.b.d', 1)(source)).toEqualTypeOf<void>();
    expectTypeOf(set('d[0]', { e: 'b', f: [3], g: [false]})(source)).toEqualTypeOf<void>();
    expectTypeOf(set('d[0].e', 'b')(source)).toEqualTypeOf<void>();
    expectTypeOf(set('d[0].f', [3])(source)).toEqualTypeOf<void>();
    expectTypeOf(set('d[0].g', [false])(source)).toEqualTypeOf<void>();
    expectTypeOf(set('h', false)(source)).toEqualTypeOf<void>();
    expectTypeOf(set('hi', [[{ j: 4 }]])(source)).toEqualTypeOf<void>();
    expectTypeOf(set('hi[0]', [{ j: 4 }])(source)).toEqualTypeOf<void>();
    expectTypeOf(set('hi[0][0]', { j: 4 })(source)).toEqualTypeOf<void>();
    expectTypeOf(set('z', 1)(source)).toEqualTypeOf<void>();
  });
});
