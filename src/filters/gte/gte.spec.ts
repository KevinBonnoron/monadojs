import { describe, expect, it } from 'vitest';
import { gte } from './gte';

describe('gte', () => {
  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = gte(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gte(4);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = gte('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gte('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = new Date('2020-06-01');

    it('should return true', () => {
      const operator = gte(new Date('2020-06-01'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = gte(new Date('2020-07-01'));
      expect(operator(source)).toBeFalsy();
    });
  });
});
