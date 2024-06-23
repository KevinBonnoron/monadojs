import { describe, expect, it } from 'vitest';
import type { AnyRecord } from '../../types';
import { catchError } from '../catch-error/catch-error';
import { pipe } from './pipe';

describe('pipe', () => {
  const pickOperator = (property: string) => (object: AnyRecord) => object[property];
  const addOperator = (value: number) => (source: number) => value + source;

  it('should execute operators in the order', () => {
    const source = { a: { b: 5 } };
    const expected = 7;

    expect(pipe(pickOperator('a'), pickOperator('b'), addOperator(2))(source)).toStrictEqual(expected);
  });

  it('should catchError if one operator is failing', () => {
    const source = { b: { a: 5 } };
    const expected = 0;

    expect(
      pipe(
        pickOperator('a'),
        pickOperator('b'),
        addOperator(2),
        catchError(() => 0),
      )(source),
    ).toStrictEqual(expected);
  });
});
