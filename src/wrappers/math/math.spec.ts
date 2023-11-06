import { describe, expect, it } from 'vitest';
import { math } from './math';

describe('math', () => {
  describe('abs', () => {
    const operator = math.abs();

    it('should return absolute value', () => {
      expect(operator(-1)).toStrictEqual(1);
      expect(operator(1)).toStrictEqual(1);
    });
  });

  describe('ceil', () => {
    const operator = math.ceil();

    it('should ceil values', () => {
      expect(operator(0.0)).toStrictEqual(0);
      expect(operator(0.9)).toStrictEqual(1);
    });
  });

  describe('floor', () => {
    const operator = math.floor();

    it('should floor values', () => {
      expect(operator(0.0)).toStrictEqual(0);
      expect(operator(0.9)).toStrictEqual(0);
    });
  });

  describe('pow', () => {
    const operator = math.pow(2);

    it('should pow values', () => {
      expect(operator(0)).toStrictEqual(0);
      expect(operator(2)).toStrictEqual(4);
    });
  });

  describe('round', () => {
    const operator = math.round();

    it('should round value', () => {
      expect(operator(0.1)).toStrictEqual(0.1);
      expect(operator(0.02)).toStrictEqual(0.02);
      expect(operator(0.1 + 0.2)).toStrictEqual(0.3);
    });
  });

  describe('sign', () => {
    const operator = math.sign();

    it('should return value based on sign', () => {
      expect(operator(1)).toStrictEqual(1);
      expect(operator(-1)).toStrictEqual(-1);
      expect(operator(0)).toStrictEqual(0);
    });
  });

  describe('trunc', () => {
    const operator = math.trunc();

    it('should trunc values', () => {
      expect(operator(0.0)).toEqual(0);
      expect(operator(0.9)).toEqual(0);
    });
  });
});
