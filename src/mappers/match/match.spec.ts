import { eq } from '../../filters';
import { identity, pipe } from '../../operators';
import { Just, Nothing } from '../../utils';
import { modulo } from '../modulo/modulo';
import { match } from './match';

describe('match', () => {
  it('should return values that match with Maybe', () => {
    const values = ['a', 1, [], null, undefined].map(Just);
    const matches = [
      { if: Just('a'), then: identity() },
      { if: Just(1), then: (value: number) => value + 1 },
      { if: Just, then: 'just' },
      { if: Nothing, then: 'null' },
    ];

    expect(values.map(match(matches))).toStrictEqual(['a', 2, 'just', 'null', 'null']);
  });

  it('should return values that match with functions', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const matches = [
      { if: (value: number) => value % 2 === 1, then: 'odd' },
      { if: (value: number) => value % 2 === 0, then: 'even' },
    ];

    expect(values.map(match(matches))).toStrictEqual(['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']);
  });

  it('should return values that match with operator', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const matches = [
      { if: pipe(modulo(3), eq(0)), then: 'zero' },
      { if: pipe(modulo(3), eq(1)), then: 'one' },
    ];

    expect(values.map(match(matches))).toStrictEqual(['zero', 'one', 2, 'zero', 'one', 5, 'zero', 'one', 8, 'zero']);
  });

  it('should return values that match with regex', () => {
    const values = ['a', 'b', 'c', 'd'];
    const matches = [
      { if: /[a-b]/, then: identity() },
      { if: /[c-d]/, then: Nothing },
    ];

    expect(values.map(match(matches))).toStrictEqual(['a', 'b', Nothing, Nothing]);
  });

  it('should return values that match default', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const matches = [{ if: pipe(modulo(3), eq(0)), then: 'zero' }, { then: 'one' }];

    expect(values.map(match(matches))).toStrictEqual(['zero', 'one', 'one', 'zero', 'one', 'one', 'zero', 'one', 'one', 'zero']);
  });
});
