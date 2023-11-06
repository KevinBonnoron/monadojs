import { describe, expect, it } from 'vitest';
import { string } from './string';

describe('string', () => {
  describe('capitalize', () => {
    const operator = string.capitalize();

    it('should return capitalized string', () => {
      expect(['abc'].map(operator)).toStrictEqual(['Abc']);
      expect(['abc', 'DEF'].map(operator)).toStrictEqual(['Abc', 'Def']);
      expect(operator('abc')).toStrictEqual('Abc');
    });
  });

  describe('replace', () => {
    it('should return a replaced string', () => {
      expect(['ABC'].map(string.replace('A', 'C'))).toStrictEqual(['CBC']);
      expect(['ABC', 'ABC'].map(string.replace('A', 'C'))).toStrictEqual(['CBC', 'CBC']);
      expect(['ABCABC'].map(string.replace('A', 'C'))).toStrictEqual(['CBCABC']);
      expect(['ABCABC'].map(string.replace(/A/g, 'C'))).toStrictEqual(['CBCCBC']);
      expect(string.replace('A', 'C')('ABC')).toStrictEqual('CBC');
      expect(string.replace('A', 'C')('ABCABC')).toStrictEqual('CBCABC');
      expect(string.replace(/A/g, 'C')('ABCABC')).toStrictEqual('CBCCBC');
    });
  });
  
  describe('substring', () => {
    it('should return substring of values', () => {
      expect(['ABC'].map(string.substring(1))).toStrictEqual(['BC']);
      expect(['ABC'].map(string.substring(1, 1))).toStrictEqual(['B']);
      expect(['ABC'].map(string.substring(-1))).toStrictEqual(['ABC']);
      expect(string.substring(1)('ABC')).toStrictEqual('BC');
      expect(string.substring(1, 1)('ABC')).toStrictEqual('B');
      expect(string.substring(-1)('ABC')).toStrictEqual('ABC');
    });
  });

  describe('toLowerCase', () => {
    const operator = string.toLowerCase();

    it('should return lowercase string', () => {
      expect(['Abc', 'DEF'].map(operator)).toStrictEqual(['abc', 'def']);
      expect(operator('Abc')).toStrictEqual('abc');
    });
  });

  describe('toUpperCase', () => {
    const operator = string.toUpperCase();

    it('should return uppercase string', () => {
      expect(['abc', 'DEF'].map(operator)).toStrictEqual(['ABC', 'DEF']);
      expect(operator('abc')).toStrictEqual('ABC');
    });
  });
});
