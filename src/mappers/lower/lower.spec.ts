import { describe, expect, it } from 'vitest';
import { lower } from './lower';

describe('lower', () => {
  const operator = lower();

  describe('string', () => {
    it('should return lowercase string', () => {
      expect(['Abc', 'DEF'].map(operator)).toStrictEqual(['abc', 'def']);
      expect(operator('Abc')).toStrictEqual('abc');
    });
  });
});
