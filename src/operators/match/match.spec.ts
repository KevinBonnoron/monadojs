import { describe, expect, it } from 'vitest';
import {
  DIVERSE_ARRAY,
  DIVERSE_MAP,
  DIVERSE_SET,
  NUMBER_ARRAY,
  NUMBER_MAP,
  NUMBER_SET,
  STRING_ARRAY,
  STRING_MAP,
  STRING_SET
} from '../../../tests/test.data';
import { eq } from '../../filters';
import { math } from '../../mappers/math/math';
import { Just, Nothing } from '../../utils';
import { identity } from '../identity/identity';
import { pipe } from '../pipe/pipe';
import { match } from './match';

describe('match', () => {
  describe('Array', () => {
    it('should return values that match with Maybe', () => {
      const source = DIVERSE_ARRAY;
      const operator = match([
        { if: Just('a'), then: identity() },
        { if: Just(0), then: (value: number) => value + 1 },
        { if: Just, then: 'just' },
        { if: Nothing, then: 'null' }
      ]);

      expect(operator(source)).toStrictEqual([
        'null',
        'null',
        'a',
        1,
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'null'
      ]);
    });

    it('should return values that match with functions', () => {
      const source = NUMBER_ARRAY;
      const operator = match([
        { if: (value: number) => value % 2 === 1, then: 'odd' },
        { if: (value: number) => value % 2 === 0, then: 'even' }
      ]);
      const expected = ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with operator', () => {
      const source = NUMBER_ARRAY;
      const operator = match([
        { if: pipe(math.modulo(3), eq(0)), then: 'zero' },
        { if: pipe(math.modulo(3), eq(1)), then: 'one' }
      ]);
      const expected = ['one', 2, 'zero', 'one', 5, 'zero', 'one', 8, 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with regex', () => {
      const source = STRING_ARRAY;
      const operator = match([{ if: /[a-m]/, then: identity() }, { then: Nothing }]);
      const expected = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing
      ];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match default', () => {
      const source = NUMBER_ARRAY;
      const operator = match([{ if: pipe(math.modulo(3), eq(0)), then: 'zero' }, { then: 'one' }]);
      const expected = ['one', 'one', 'zero', 'one', 'one', 'zero', 'one', 'one', 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    it('should return values that match with Maybe', () => {
      const source = DIVERSE_SET;
      const operator = match([
        { if: Just('a'), then: identity() },
        { if: Just(0), then: (value: number) => value + 1 },
        { if: Just, then: 'just' },
        { if: Nothing, then: 'null' }
      ]);

      expect(operator(source)).toStrictEqual([
        'null',
        'null',
        'a',
        1,
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'null'
      ]);
    });

    it('should return values that match with functions', () => {
      const source = NUMBER_SET;
      const operator = match([
        { if: (value: number) => value % 2 === 1, then: 'odd' },
        { if: (value: number) => value % 2 === 0, then: 'even' }
      ]);
      const expected = ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with operator', () => {
      const source = NUMBER_SET;
      const operator = match([
        { if: pipe(math.modulo(3), eq(0)), then: 'zero' },
        { if: pipe(math.modulo(3), eq(1)), then: 'one' }
      ]);
      const expected = ['one', 2, 'zero', 'one', 5, 'zero', 'one', 8, 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with regex', () => {
      const source = STRING_SET;
      const operator = match([{ if: /[a-m]/, then: identity() }, { then: Nothing }]);
      const expected = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing
      ];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match default', () => {
      const source = NUMBER_SET;
      const operator = match([{ if: pipe(math.modulo(3), eq(0)), then: 'zero' }, { then: 'one' }]);
      const expected = ['one', 'one', 'zero', 'one', 'one', 'zero', 'one', 'one', 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });

  describe('Map', () => {
    it('should return values that match with Maybe', () => {
      const source = DIVERSE_MAP;
      const operator = match([
        { if: Just('a'), then: identity() },
        { if: Just(0), then: (value: number) => value + 1 },
        { if: Just, then: 'just' },
        { if: Nothing, then: 'null' }
      ]);

      expect(operator(source)).toStrictEqual([
        'null',
        'null',
        'a',
        1,
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'just',
        'null'
      ]);
    });

    it('should return values that match with functions', () => {
      const source = NUMBER_MAP;
      const operator = match([
        { if: (value: number) => value % 2 === 1, then: 'odd' },
        { if: (value: number) => value % 2 === 0, then: 'even' }
      ]);
      const expected = ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with operator', () => {
      const source = NUMBER_MAP;
      const operator = match([
        { if: pipe(math.modulo(3), eq(0)), then: 'zero' },
        { if: pipe(math.modulo(3), eq(1)), then: 'one' }
      ]);
      const expected = ['one', 2, 'zero', 'one', 5, 'zero', 'one', 8, 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with regex', () => {
      const source = STRING_MAP;
      const operator = match([{ if: /[a-m]/, then: identity() }, { then: Nothing }]);
      const expected = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing,
        Nothing
      ];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match default', () => {
      const source = NUMBER_MAP;
      const operator = match([{ if: pipe(math.modulo(3), eq(0)), then: 'zero' }, { then: 'one' }]);
      const expected = ['one', 'one', 'zero', 'one', 'one', 'zero', 'one', 'one', 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });
  });
});
