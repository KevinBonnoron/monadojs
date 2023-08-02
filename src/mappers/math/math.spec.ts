import { describe, expect, it } from 'vitest';
import { math } from './math';

describe('math', () => {
  describe('abs', () => {
    const operator = math.abs();

    it('should return absolute value', () => {
      expect([-10].map(operator)).toStrictEqual([10]);
      expect([-10, 20].map(operator)).toStrictEqual([10, 20]);
      expect(operator(-10)).toStrictEqual(10);
    });
  });

  describe('ceil', () => {
    const operator = math.ceil();

    it('should ceil values', () => {
      expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(operator)).toStrictEqual([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
      expect([-0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9].map(operator)).toStrictEqual([-0, -0, -0, -0, -0, -0, -0, -0, -0, -0]);
      expect(operator(0.0)).toStrictEqual(0);
    });
  });

  describe('divide', () => {
    it('should divide values', () => {
      expect(math.divide()(1)).toStrictEqual(1);
      expect(math.divide(1)(1)).toStrictEqual(1);
      expect([1, 2].map(math.divide(1))).toStrictEqual([1, 2]);
    });
  });

  describe('minus', () => {
    it('should substract values', () => {
      expect([1].map(math.minus())).toStrictEqual([0]);
      expect([1, 2].map(math.minus(1))).toStrictEqual([0, 1]);
      expect(math.minus()(1)).toStrictEqual(0);
      expect(math.minus(1)(1)).toStrictEqual(0);
    });
  });

  describe('modulo', () => {
    it('should return modulo value', () => {
      expect([1].map(math.modulo())).toStrictEqual([0]);
      expect([1, 2].map(math.modulo(1))).toStrictEqual([0, 0]);
      expect(math.modulo()(1)).toStrictEqual(0);
      expect(math.modulo(1)(1)).toStrictEqual(0);
    });
  });

  describe('plus', () => {
    it('should add values', () => {
      expect([1].map(math.plus())).toStrictEqual([2]);
      expect([1, 2].map(math.plus(1))).toStrictEqual([2, 3]);
      expect(math.plus()(1)).toStrictEqual(2);
      expect(math.plus(1)(1)).toStrictEqual(2);
    });
  });

  describe('pow', () => {
    it('should pow values', () => {
      expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(math.pow(2))).toStrictEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
      expect([-0, -1, -2, -3, -4, -5, -6, -7, -8, -9].map(math.pow(2))).toStrictEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
      expect(math.pow(2)(0)).toEqual(0);
    });
  });

  describe('round', () => {
    it('should return a replaced string', () => {
      expect([0.1, 0.02, 0.003, 0.0004, 0.00005, 0.000006].map(math.round())).toStrictEqual([0.1, 0.02, 0, 0, 0, 0]);
      expect([0.1, 0.02, 0.003, 0.0004, 0.00005, 0.000006].map(math.round(3))).toStrictEqual([0.1, 0.02, 0.003, 0, 0, 0]);
      expect(math.round()(0.1 + 0.2)).toStrictEqual(0.3);
    });
  });

  describe('sign', () => {
    it('should return a replaced string', () => {
      expect([1, -1, 0].map(math.sign())).toStrictEqual([1, -1, 0]);
      expect(math.sign()(1)).toStrictEqual(1);
      expect(math.sign()(-1)).toStrictEqual(-1);
      expect(math.sign()(0)).toStrictEqual(0);
    });
  });

  describe('times', () => {
    it('should multiply values', () => {
      expect(math.times(1)(2)).toStrictEqual(2);
      expect([1, 2].map(math.times(2))).toStrictEqual([2, 4]);
    });
  });

  describe('trunc', () => {
    it('should trunc values', () => {
      expect([0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(math.trunc())).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect([-0.0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.8, -0.9].map(math.trunc())).toStrictEqual([-0, -0, -0, -0, -0, -0, -0, -0, -0, -0]);
      expect(math.trunc()(0.0)).toEqual(0);
    });
  });
  
});
