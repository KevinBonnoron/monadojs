import { eq } from '../../filters';
import { pipe } from '../../operators';
import { modulo } from '../modulo/modulo';
import { matchWith } from './match-with';

describe('matchWith', () => {
  it('should return values that match with', () => {
    expect(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        matchWith(
          new Map([
            [(value) => value % 2 === 0, 'even'],
            [(value) => value % 2 === 1, 'odd'],
          ])
        )
      )
    ).toStrictEqual(['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']);

    expect(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        matchWith(
          new Map([
            [pipe(modulo(3), eq(0)), 'zero'],
            [pipe(modulo(3), eq(1)), 'one'],
            [pipe(modulo(3), eq(2)), 'two'],
          ])
        )
      )
    ).toStrictEqual(['zero', 'one', 'two', 'zero', 'one', 'two', 'zero', 'one', 'two', 'zero']);
  });
});
