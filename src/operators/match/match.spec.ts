import { eq } from '../../filters/eq/eq';
import { modulo } from '../../mappers/modulo/modulo';
import { Just, Nothing } from '../../utils';
import { identity } from '../identity/identity';
import { pipe } from '../pipe/pipe';
import { match } from './match';

describe('match', () => {
  describe('Array', () => {
    it('should return values that match with Maybe', () => {
      const source = ['a', 1, [], null, undefined].map(Just);
      const operator = match([
        { if: Just('a'), then: identity() },
        { if: Just(1), then: (value: number) => value + 1 },
        { if: Just, then: 'just' },
        { if: Nothing, then: 'null' },
      ]);

      expect(operator(source)).toStrictEqual(['a', 2, 'just', 'null', 'null']);
    });

    it('should return values that match with functions', () => {
      const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const operator = match([
        { if: (value: number) => value % 2 === 1, then: 'odd' },
        { if: (value: number) => value % 2 === 0, then: 'even' },
      ]);
      const expected = ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with operator', () => {
      const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const operator = match([
        { if: pipe(modulo(3), eq(0)), then: 'zero' },
        { if: pipe(modulo(3), eq(1)), then: 'one' },
      ]);
      const expected = ['zero', 'one', 2, 'zero', 'one', 5, 'zero', 'one', 8, 'zero'];

      expect(operator(source)).toStrictEqual(expected);
    });

    it('should return values that match with regex', () => {
      const source = ['a', 'b', 'c', 'd'];
      const operator = match([
        { if: /[a-b]/, then: identity() },
        { if: /[c-d]/, then: Nothing },
      ]);
      const expected = ['a', 'b', Nothing, Nothing];

      expect(source.map(operator)).toStrictEqual(expected);
    });

    it('should return values that match default', () => {
      const source = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const operator = match([{ if: pipe(modulo(3), eq(0)), then: 'zero' }, { then: 'one' }]);
      const expected = ['zero', 'one', 'one', 'zero', 'one', 'one', 'zero', 'one', 'one', 'zero'];

      expect(source.map(operator)).toStrictEqual(expected);
    });
  });

  describe('Set', () => {
    // TODO
  });

  describe('Map', () => {
    // TODO
  });

  describe('PlainObject', () => {
    // TODO
  });

  describe('others', () => {
    // TODO
  });
});
