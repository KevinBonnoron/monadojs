import { describe, expect, it } from 'vitest';
import { DEFAULT_DATE, DEFAULT_PLAIN_OBJECT, NUMBER_ARRAY, NUMBER_MAP, NUMBER_SET } from '../../../tests/test.data';
import { LOOSE_EQUALITY } from '../../utils';
import { neq } from './neq';

describe('neq', () => {
  describe('null', () => {
    const source = null;

    it('should return true', () => {
      const operator = neq({});
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(null);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const source = undefined;

    it('should return true', () => {
      const operator = neq({});
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(undefined);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = neq('b');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq('a');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = neq(0);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false for number string', () => {
      const operator = neq('1', LOOSE_EQUALITY);
      expect(operator(source)).toBeFalsy();
    });

    it('should return false', () => {
      const operator = neq(1);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const source = true;

    it('should return true', () => {
      const operator = neq(false);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(true);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('symbol', () => {
    const source = Symbol('SYMBOL');

    it('should return true', () => {
      const operator = neq(Symbol('SYMBOL'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(source);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = DEFAULT_DATE;

    it('should return true', () => {
      const operator = neq(new Date('2020-01-01T00:00:01Z'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(new Date('2020-01-01T00:00:00Z'));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('RexExp', () => {
    const source = /[0-9]/g;

    it('should return true', () => {
      const operator = neq(new RegExp('[0-9]'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(new RegExp('[0-9]', 'g'));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = NUMBER_ARRAY;

    it('should return true', () => {
      const operator = neq([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = NUMBER_SET;

    it('should return true', () => {
      const operator = neq(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = NUMBER_MAP;

    it('should return true', () => {
      const operator = neq(
        new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8]
        ])
      );
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq(
        new Map([
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 8],
          [8, 9]
        ])
      );
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return true', () => {
      const operator = neq({ a: 1, c: 3 });
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = neq({ a: 1, b: 2, c: 3 });
      expect(operator(source)).toBeFalsy();
    });
  });
});
