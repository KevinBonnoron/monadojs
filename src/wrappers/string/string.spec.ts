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

  describe('empty', () => {
    const operator = string.empty();

    it('should return true for empty string', () => {
      expect([''].map(operator)).toStrictEqual([true]);
      expect(['', 'abc'].map(operator)).toStrictEqual([true, false]);
      expect(operator('')).toStrictEqual(true);
      expect(operator('abc')).toStrictEqual(false);
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

  describe('toLocaleLowerCase', () => {
    const operator = string.toLocaleLowerCase();

    it('should return lowercase string', () => {
      expect(['Abc', 'DEF'].map(operator)).toStrictEqual(['abc', 'def']);
      expect(operator('Abc')).toStrictEqual('abc');
    });
  });

  describe('toLocaleUpperCase', () => {
    const operator = string.toLocaleUpperCase();

    it('should return uppercase string', () => {
      expect(['abc', 'DEF'].map(operator)).toStrictEqual(['ABC', 'DEF']);
      expect(operator('abc')).toStrictEqual('ABC');
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
