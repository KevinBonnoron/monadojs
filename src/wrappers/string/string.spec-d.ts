import { describe, expectTypeOf, it } from 'vitest';
import { string } from './string';

describe('string', () => {
  describe('capitalize', () => {
    it('should have correct types', () => {
      const operator = string.capitalize();

      expectTypeOf(operator('a')).toEqualTypeOf<string>();
    });
  });

  describe('replace', () => {
    it('should have correct types', () => {
      const operator = string.replace('a', 'b');
  
      expectTypeOf(operator('a')).toEqualTypeOf<string>();
    });
  });

  describe('toLowerCase', () => {
    it('should have correct types', () => {
      const operator = string.toLowerCase();
  
      expectTypeOf(operator('A')).toEqualTypeOf<string>();
    });
  });

  describe('toUpperCase', () => {
    it('should have correct types', () => {
      const operator = string.toUpperCase();
  
      expectTypeOf(operator('a')).toEqualTypeOf<string>();
    });
  });

  describe('substring', () => {
    it('should have correct types', () => {
      const operator = string.substring(0);
  
      expectTypeOf(operator('a')).toEqualTypeOf<string>();
    });
  });
});
