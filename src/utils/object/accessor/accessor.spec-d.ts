import { describe, expectTypeOf, it } from 'vitest';
import { NOW } from '../../../../tests/test.data';
import { accessor } from './accessor';

describe('accessor', () => {
  it('should have correct types', () => {
    const value = {
      a: '1',
      b: 2,
      c: {
        d: NOW
      }
    };

    expectTypeOf(accessor(value, 'a').get).toEqualTypeOf<(defaultValue?: string) => string>();
    expectTypeOf(accessor(value, 'a').set).toEqualTypeOf<(value: string) => void>();
    expectTypeOf(accessor(value, 'b').get).toEqualTypeOf<(defaultValue?: number) => number>();
    expectTypeOf(accessor(value, 'b').set).toEqualTypeOf<(value: number) => void>();
    expectTypeOf(accessor(value, 'c').get).toEqualTypeOf<(defaultValue?: { d: Date }) => { d: Date }>();
    expectTypeOf(accessor(value, 'c').set).toEqualTypeOf<(value: { d: Date }) => void>();
  });
});
