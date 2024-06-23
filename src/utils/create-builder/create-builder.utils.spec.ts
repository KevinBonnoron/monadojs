import { describe, expect, it } from 'vitest';
import { NOW } from '../../../tests/test.data';
import { createBuilder } from './create-builder.utils';

describe('createBuilder', () => {
  describe('PlainObject', () => {
    interface Dummy {
      a: number;
      b: string;
      c: {
        d: Date;
      };
    }

    it('should create an object builder from interface', () => {
      const builder = createBuilder<Dummy>().a(1).b('2').c({ d: NOW });
      expect(builder()).toEqual({ a: 1, b: '2', c: { d: NOW } });
    });

    it('should not update the builder containing object when modifying the initial value', () => {
      const value: Dummy = { a: 1, b: '2', c: { d: NOW } };
      const builder = createBuilder(value);
      value.a = 5;
      expect(builder()).toStrictEqual({ a: 1, b: '2', c: { d: NOW } });
      expect(value).toStrictEqual({ a: 5, b: '2', c: { d: NOW } });
    });

    it('should create new object each time builder is called', () => {
      const builder = createBuilder<Dummy>().a(1).b('2').c({ d: NOW });

      const value = builder();
      value.a = 3;
      value.b = '4';
      value.c.d = new Date(0);
      expect(builder()).toEqual({ a: 1, b: '2', c: { d: NOW } });
      expect(value).toEqual({ a: 3, b: '4', c: { d: new Date(0) } });
    });

    it('should allow using object and method', () => {
      const builder = createBuilder<Dummy>();

      builder({ a: 1 }).b('2');
      expect(builder({ a: 2 })).toEqual({ a: 2, b: '2' });
    });
  });
});
