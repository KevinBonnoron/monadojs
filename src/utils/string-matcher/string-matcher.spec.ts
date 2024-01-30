import { describe, expect, it } from 'vitest';
import { stringMatcher } from './string-matcher';

describe('StringMatcher', () => {
  describe('parse', () => {

    it('should match string', () => {
      const numbers: string[] = [];
      const strings: string[] = [];
  
      const matcher = stringMatcher()
        .match(/^([0-9])/, ([value]) => numbers.push(value))
        .match(/^([a-z])/, ([value]) => strings.push(value))
        ;
  
      matcher.parse('0a1b2c3d4e5f6g7h8i9');
      expect(numbers).toStrictEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
      expect(strings).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
    });
  
    it('should throw error whern no corresponding matching are found', () => {
      const matcher = stringMatcher()
        .match(/^([a-z])/)
        ;
  
      expect(() => matcher.parse('0123456789')).toThrow(`Non matching case found. Remaining string: 0123456789`);
    });

    it('should replace already added regex', () => {
      const numbers: string[] = [];
      const strings: string[] = [];

      const matcher = stringMatcher()
        .match(/^([0-9])/, ([value]) => numbers.push(value))
        .match(/^([a-z])/, ([value]) => strings.push(value))
        .match(/^([0-9])/, () => {/* do nothing */})
        ;

      matcher.parse('0a1b2c3d4e5f6g7h8i9');
      expect(numbers).toStrictEqual([]);
      expect(strings).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
    });
  });

  describe('query', () => {
    it('should return the match', () => {
      expect(stringMatcher().match(/(123)/).query('123abc456')).toStrictEqual(['123']);
      expect(stringMatcher().match(/(abc)/).query('123abc456')).toStrictEqual(['abc']);
      expect(stringMatcher().match(/(456)/).query('123abc456')).toStrictEqual(['456']);
    });
  });
});
