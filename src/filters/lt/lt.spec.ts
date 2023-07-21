import { describe, expect, it } from 'vitest';
import { lt } from './lt';

describe('lt', () => {
  describe('string', () => {
    const source = 'c';

    it('should return true', () => {
      const operator = lt('d');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lt('c');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 3;

    it('should return true', () => {
      const operator = lt(4);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lt(3);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = new Date('2020-06-01');

    it('should return true', () => {
      const operator = lt(new Date('2020-07-01'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = lt(new Date('2020-05-01'));
      expect(operator(source)).toBeFalsy();
    });
  });
});
