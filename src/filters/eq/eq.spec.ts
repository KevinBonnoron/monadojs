import { DEFAULT_ARRAY, DEFAULT_DATE, DEFAULT_MAP, DEFAULT_PLAIN_OBJECT, DEFAULT_SET } from '../../../tests/test.data';
import { LOOSE_EQUALITY } from '../../utils';
import { eq } from './eq';

describe('eq', () => {
  describe('null', () => {
    const source = null;

    it('should return true', () => {
      const operator = eq(null);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq({});
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('undefined', () => {
    const source = undefined;

    it('should return true', () => {
      const operator = eq(undefined);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq({});
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('string', () => {
    const source = 'a';

    it('should return true', () => {
      const operator = eq('a');
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq('b');
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('number', () => {
    const source = 1;

    it('should return true', () => {
      const operator = eq(1);
      expect(operator(source)).toBeTruthy();
    });

    it('should return true for number string', () => {
      const operator = eq('1', LOOSE_EQUALITY);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(0);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('boolean', () => {
    const source = true;

    it('should return true', () => {
      const operator = eq(true);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(false);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('symbol', () => {
    const source = Symbol('SYMBOL');

    it('should return true', () => {
      const operator = eq(source);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(Symbol('SYMBOL'));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Date', () => {
    const source = DEFAULT_DATE;

    it('should return true', () => {
      const operator = eq(new Date('2020-01-01T00:00:00Z'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(new Date('2020-01-01T00:00:01Z'));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('RexExp', () => {
    const source = /[0-9]/g;

    it('should return true', () => {
      const operator = eq(new RegExp('[0-9]', 'g'));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(new RegExp('[0-9]'));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Array', () => {
    const source = DEFAULT_ARRAY;

    it('should return true', () => {
      const operator = eq([1, 2, 3]);
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq([3, 2, 1]);
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Set', () => {
    const source = DEFAULT_SET;

    it('should return true', () => {
      const operator = eq(new Set([1, 2, 3]));
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(new Set([3, 2, 1]));
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('Map', () => {
    const source = DEFAULT_MAP;

    it('should return true', () => {
      const operator = eq(
        new Map([
          [1, 'a'],
          [2, 'b'],
          [3, 'c'],
        ])
      );
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq(
        new Map([
          [1, 'c'],
          [2, 'b'],
          [3, 'a'],
        ])
      );
      expect(operator(source)).toBeFalsy();
    });
  });

  describe('PlainObject', () => {
    const source = DEFAULT_PLAIN_OBJECT;

    it('should return true', () => {
      const operator = eq({ a: 1, b: 2, c: 3 });
      expect(operator(source)).toBeTruthy();
    });

    it('should return false', () => {
      const operator = eq({ a: 1, c: 3 });
      expect(operator(source)).toBeFalsy();
    });
  });
});
