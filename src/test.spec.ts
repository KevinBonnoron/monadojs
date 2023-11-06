import { describe, expect, it } from 'vitest';
import { filter, pipe, tap } from './index';

describe('test', () => {
  it('should work', () => {
    const persons = [
      { id: 1, firstName: 'James', lastName: 'Brown', age: 15, sex: 'M', toto: [1] },
      { id: 2, firstName: 'Robert', lastName: 'Jones', age: 30, sex: 'M', toto: [1, 2] },
      { id: 3, firstName: 'Mary', lastName: 'Williams', age: 19, sex: 'F', toto: [1] },
      { id: 4, firstName: 'John', lastName: 'David', age: 26, sex: 'M', toto: [1] },
      { id: 5, firstName: 'Patricia', lastName: 'Brown', age: 52, sex: 'F', toto: [1] },
      { id: 6, firstName: 'Jennifer', lastName: 'Smith', age: 7, sex: 'F', toto: [1] },
    ];

    // console.log(map('age')(persons));

    pipe(
      filter(
        { firstName: { $or: [{ $like: /J/ }, { $like: 's' }] } }
      ),
      tap(console.log)
    )(persons);

    expect(true).toBe(true);
  });
});
