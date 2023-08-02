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

  describe('divide', () => {
    it('should have correct types', () => {
      const operator = math.divide(5);

      expectTypeOf(operator(10)).toEqualTypeOf<number>();
    });
  });

  describe('minus', () => {
    it('should have correct types', () => {
      const operator = math.minus();

      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });

  describe('modulo', () => {
    it('should have correct types', () => {
      const operator = math.modulo();

      expectTypeOf(operator(1)).toEqualTypeOf<number>();
    });
  });

  describe('plus', () => {
    it('should have correct types', () => {
      const operator = math.plus();

      expectTypeOf(operator(1)).toEqualTypeOf<number>();
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

  describe('times', () => {
    it('should have correct types', () => {
      const operator = math.times(2);
  
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

