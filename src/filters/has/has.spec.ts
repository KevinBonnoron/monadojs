import { describe, expect, it } from 'vitest';
import { DEFAULT_PLAIN_OBJECT, NUMBER_MAP } from '../../../tests/test.data';
import { has } from './has';

describe('has', () => {
  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return true', () => {
      const operator = has('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = has('d');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return true', () => {
      const operator = has(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = has(-1);
      expect(operator(source)).toBeFalsy();
    });
  });
});
