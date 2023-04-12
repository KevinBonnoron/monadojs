import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_PLAIN_OBJECT, DEFAULT_SYMBOL, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { encloseIn } from './enclose-in';

describe('enclose-in', () => {
  const operator = encloseIn('a');

  describe('string', () => {
    it('should enclose in', () => {
      const source = 'a';
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('number', () => {
    it('should enclose in', () => {
      const source = 1;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('symbol', () => {
    it('should enclose in', () => {
      const source = DEFAULT_SYMBOL;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Date', () => {
    it('should enclose in', () => {
      const source = DEFAULT_DATE;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Array', () => {
    it('should enclose in', () => {
      const source = NUMBER_ARRAY;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    it('should enclose in', () => {
      const source = NUMBER_SET;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    it('should enclose in', () => {
      const source = NUMBER_MAP;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('PlainObject', () => {
    it('should enclose in PlainObject', () => {
      const source = DEFAULT_PLAIN_OBJECT;
      const expected = { a: source };

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
