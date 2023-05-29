import { describe, expect, it } from 'vitest';
import { eq, neq } from '../../filters';
import { intercept } from './validation.utils';

describe('ValidationUtils', () => {
  describe('Array', () => {
    it('should accept elements', () => {
      const array: string[] = intercept([], { push: eq('A') });
      array.push('A');
      array.push('B');
      array.push('C');

      expect([...array]).toStrictEqual(['A']);
    });

    it('should reject elements', () => {
      const array: string[] = intercept([], { push: neq('A') });
      array.push('A');
      array.push('B');
      array.push('C');

      expect([...array]).toStrictEqual(['B', 'C']);
    });
  });

  describe('Set', () => {
    it('should accept elements', () => {
      const set = intercept(new Set<string>(), { add: eq('A') });
      set.add('A');
      set.add('B');
      set.add('C');

      expect([...set]).toStrictEqual(['A']);
    });

    it('should reject elements', () => {
      const set = intercept(new Set<string>(), { add: neq('A') });
      set.add('A');
      set.add('B');
      set.add('C');

      expect([...set]).toStrictEqual(['B', 'C']);
    });
  });

  describe('PlainObject', () => {
    it('should allow adding a property', () => {
      const object: any = intercept({}, { defineProperty: eq('a') });
      object.a = '1';
      object.b = 2;
      object.c = true;
      expect({ ...object }).toStrictEqual({ a: '1' });
    });

    it('should force returning a value', () => {
      const object: any = intercept({}, { get: { 'a': () => '2' } });
      object.a = '1';
      expect({ ...object }).toStrictEqual({ a: '2' });
    });
  });
});
