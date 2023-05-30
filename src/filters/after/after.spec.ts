import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE } from '../../../tests/test.data';
import { after } from './after';

describe('after', () => {
  describe('string', () => {
    const operator = after(DEFAULT_DATE);

    it('should return true', () => {
      expect(operator('2020-02-01T00:00:00Z')).toBeFalsy();
    });

    it('should return false', () => {
      expect(operator('2020-01-01T00:00:00Z')).toBeFalsy();
    });
  });

  describe('Date', () => {
    const operator = after(DEFAULT_DATE);

    it('should return true', () => {
      expect(operator(new Date('2020-02-01T00:00:00Z'))).toBeTruthy();
    });

    it('should return false', () => {
      expect(operator(DEFAULT_DATE)).toBeFalsy();
    });
  });
});
