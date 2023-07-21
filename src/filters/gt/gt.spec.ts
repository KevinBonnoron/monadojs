import { describe, expect, it } from 'vitest';
import { gt } from './gt';

describe('gt', () => {
  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = gt('');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gt('c');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = gt(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gt(3);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = new Date('2020-06-01');

    it('should return true', () => {
      const operator = gt(new Date('2020-05-01'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gt(new Date('2020-07-01'));
      expect(operator(source)).toBeFalsy();
    });
  });
});
