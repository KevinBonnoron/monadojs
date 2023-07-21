import { describe, expect, it } from 'vitest';
import { lte } from './lte';

describe('lte', () => {
  describe('string', () => {
    const source = 'c';

    it('should return true', () => {
      const operator = lte('c');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lte('b');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 3;

    it('should return true', () => {
      const operator = lte(3);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lte(2);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = new Date('2020-06-01');

    it('should return true', () => {
      const operator = lte(new Date('2020-06-01'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lte(new Date('2020-05-01'));
      expect(operator(source)).toBeFalsy();
    });
  });
});
