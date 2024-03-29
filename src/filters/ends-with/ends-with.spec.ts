import { describe, expect, it } from 'vitest';
import { endsWith } from './ends-with';

describe('ends-with', () => {
  describe('string', () => {
    const source = 'abc';

    it('should return true', () => {
      const operator = endsWith('c');

      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = endsWith('a');

      expect(operator(source)).toBeFalsy();
    });
  });
});
