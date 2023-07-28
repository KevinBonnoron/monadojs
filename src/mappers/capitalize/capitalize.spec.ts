import { describe, expect, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  const operator = capitalize();

  describe('string', () => {
    it('should return capitalize string', () => {
      expect(['abc'].map(operator)).toStrictEqual(['Abc']);
      expect(['abc', 'DEF'].map(operator)).toStrictEqual(['Abc', 'Def']);
      expect(operator('abc')).toStrictEqual('Abc');
    });
  });
});
