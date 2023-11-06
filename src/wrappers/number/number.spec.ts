import { describe, expect, it } from 'vitest';
import { number } from './number';

describe('number', () => {
  describe('divide', () => {
    const operator = number.divide(2);

    it('should divide values', () => {
      expect(operator(2)).toStrictEqual(1);
    });
  });

  describe('minus', () => {
    const operator = number.minus();

    it('should substract values', () => {
      expect(operator(2)).toStrictEqual(1);
    });
  });

  describe('modulo', () => {
    const operator = number.modulo(1);

    it('should substract values', () => {
      expect(operator(2)).toStrictEqual(0);
    });
  });

  describe('plus', () => {
    const operator = number.plus(1);

    it('should substract values', () => {
      expect(operator(1)).toStrictEqual(2);
    });
  });

  describe('times', () => {
    const operator = number.times(1);

    it('should multiply values', () => {
      expect(operator(1)).toStrictEqual(1);
      expect(operator(2)).toStrictEqual(2);
    });
  });
});
