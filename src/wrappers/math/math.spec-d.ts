import { describe, expectTypeOf, it } from 'vitest';
import { math } from './math';

describe('math', () => {
  describe('abs', () => {
    it('should have correct types', () => {
      const operator = math.abs();

      expectTypeOf(operator(-10)).toEqualTypeOf<number>();
    });
  });

  describe('ceil', () => {
    it('should have correct types', () => {
      const operator = math.ceil();

      expectTypeOf(operator(1.0)).toEqualTypeOf<number>();
    });
  });

  describe('floor', () => {
    it('should floor values', () => {
      const operator = math.floor();

      expectTypeOf(operator(1.5)).toEqualTypeOf<number>();
    });
  });

  describe('pow', () => {
    it('should have correct types', () => {
      const operator = math.pow(2);

      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });

  describe('round', () => {
    it('should have correct types', () => {
      const operator = math.round();
  
      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });
  
  describe('sign', () => {
    it('should have correct types', () => {
      const operator = math.sign();
  
      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });

  describe('trunc', () => {
    it('should have correct types', () => {
      const operator = math.trunc();
  
      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });
});
