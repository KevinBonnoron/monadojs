import { describe, expect, it } from 'vitest';
import { NOW } from '../../../tests/test.data';
import { createBuilder } from './builder.utils';

describe('BuilderUtils', () => {
  describe('PlainObject', () => {
    interface Dummy {
      a: number;
      b: string;
      c: {
        d: Date;
      };
    }

    it('should create an object builder from interface', () => {
      const value = createBuilder<Dummy>({ a: 5 }).a(1).b('2').c({ d: NOW }).$get();
      expect(value).toEqual({ a: 1, b: '2', c: { d: NOW } });
    });

    it('should not update the builder containing object when modifying the initial value', () => {
      const value: Dummy = { a: 1, b: '2', c: { d: NOW } };
      const builder = createBuilder(value);
      value.a = 5;
      expect(builder.$get()).toStrictEqual({ a: 1, b: '2', c: { d: NOW } });
      expect(value).toStrictEqual({ a: 5, b: '2', c: { d: NOW } });
    });

    it('should create an object builder from another', () => {
      const from = createBuilder<Dummy>().a(1);

      const value = createBuilder(from)
        .b('2')
        .$get();

      expect(value).toEqual({ a: 1, b: '2' });
    });

    it('should create object in an immutable way', () => {
      const builder = createBuilder<Dummy>().a(1).b('2').c({ d: NOW });
      const value = builder.$get();

      value.a = 3;
      value.b = '4';
      value.c.d = new Date(0);
      expect(builder.$get()).toEqual({ a: 1, b: '2', c: { d: NOW } });
      expect(value).toEqual({ a: 3, b: '4', c: { d: new Date(0) } });
    });
  });
});
