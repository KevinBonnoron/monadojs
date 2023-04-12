import { describe, expect, it } from 'vitest';
import { map } from '../map/map';
import { pipe } from '../pipe/pipe';
import { catchError } from './catch-error';

describe('catch-error', () => {
  it('should catch error', () => {
    const source = [
      { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M' },
      { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M' },
      null,
      { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F' },
      { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M' },
      undefined,
      { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F' },
      { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F' }
    ];

    const operator = pipe(
      map((person: any) => `${person.age} ${person.sex}`),
      catchError(() => [])
    );

    expect(() => operator(source)).not.toThrow();
    expect(operator(source)).toStrictEqual([]);
  });
});
